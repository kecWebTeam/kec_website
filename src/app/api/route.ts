import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "API is working.",
    },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json(
      {
        success: true,
        message: "Request received.",
        data: body,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON body.",
      },
      { status: 400 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();

    return NextResponse.json(
      {
        success: true,
        message: "Resource updated.",
        data: body,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid JSON body.",
      },
      { status: 400 }
    );
  }
}

export async function DELETE() {
  return NextResponse.json(
    {
      success: true,
      message: "Resource deleted.",
    },
    { status: 200 }
  );
}