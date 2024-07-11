import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { transferErc20, transferNative } from "./transfer-funds";

/**
 * Used for creating the options needs to authenticate with WebAuthn.
 */
export async function POST(request: NextRequest) {
  const cookieStore = cookies();

  try {
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!key || !url) {
      throw new Error("Missing Supabase credentials");
    }
    createServerClient(url, key, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        },
      },
    });

    const body = await request.json();

    if (!body || "error" in body) {
      return NextResponse.json({ error: body?.error || "Invalid request" });
    }

    let txHash;

    console.log("Transfer request", body)
    const { amount, to, tokenAddress, network } = body;

    if (tokenAddress === "native") {
      let response = await transferNative(amount, to, network)
      console.log("Native response", response)

    } else {
      let response = await transferErc20(amount, to, tokenAddress, network)

    }

    if (!txHash) {
      return NextResponse.json({ error: "Transaction failed" });
    }

    return NextResponse.json({ txHash });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.error();
    }
  }
}
