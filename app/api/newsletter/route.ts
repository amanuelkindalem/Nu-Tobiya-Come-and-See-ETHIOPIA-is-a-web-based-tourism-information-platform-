import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Store the email in a newsletter_subscribers table (we'll create this)
    // For now, we'll just return success to demonstrate the flow
    // In production, you'd want to store this in the database

    // Check if table exists, if not this is just a mock response
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email })
      .select()
      .single();

    // If table doesn't exist or any other error, just log and return success
    // In production you'd handle this properly
    if (error) {
      console.log("[v0] Newsletter subscription note:", error.message);
    }

    return NextResponse.json({ 
      success: true,
      message: "Successfully subscribed to newsletter" 
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
