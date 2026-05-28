import { NextRequest, NextResponse } from "next/server";

// Simple knowledge base for Ethiopia travel
const knowledgeBase: Record<string, string> = {
  "must-see": `Ethiopia's must-see destinations include:
• Lalibela - 11 rock-hewn churches, a UNESCO World Heritage Site
• Simien Mountains - dramatic peaks and endemic wildlife
• Axum - ancient obelisks and claimed home of the Ark of the Covenant
• Danakil Depression - one of the most extreme landscapes on Earth
• Omo Valley - diverse indigenous tribes with ancient traditions
• Gondar - medieval castles and royal enclosure`,

  "safety": `Current safety tips for Ethiopia:
• Always check your government's travel advisory before departure
• Register with your embassy when visiting
• Stick to well-traveled tourist routes
• Use reputable tour operators for remote areas
• Avoid traveling at night outside major cities
• Keep copies of important documents
• Be cautious in border regions and conflict-affected areas`,

  "best time": `The best time to visit Ethiopia:
• Dry Season (October-May): Ideal for most destinations
• September-October: Beautiful after rainy season, lush landscapes
• January: Timkat (Epiphany) festival celebrations
• September: Meskel (Finding of the True Cross) celebrations
• Avoid: June-August (heavy rains in highlands)
Note: The Danakil Depression is best visited November-February`,

  "visa": `Ethiopia visa information:
• E-Visa available for most nationalities at www.evisa.gov.et
• Visa on arrival available at Addis Ababa Bole International Airport
• Tourist visa typically valid for 30 or 90 days
• Processing time: 1-3 business days for e-visa
• Cost: ~$82 for 30 days, ~$102 for 90 days
• Passport must be valid for 6+ months`,

  "vaccinations": `Recommended vaccinations for Ethiopia:
• Required: Yellow Fever (if coming from infected area)
• Recommended: Hepatitis A & B, Typhoid, Meningitis
• Consider: Rabies (for rural travel), Cholera
• Malaria: Prophylaxis recommended below 2000m elevation
• Altitude sickness medication for highland trekking
• Consult a travel medicine specialist 4-6 weeks before travel`,

  "currency": `Currency and money in Ethiopia:
• Currency: Ethiopian Birr (ETB)
• Exchange rate: ~1 USD = 55-60 ETB (rates fluctuate)
• ATMs available in major cities (Visa widely accepted)
• Bring fresh US dollars or Euros to exchange
• Credit cards accepted at upscale hotels and restaurants
• Carry cash for rural areas and small purchases
• Banks open Mon-Sat, usually 8am-4pm`,

  "default": `I can help you with information about:
• Must-see destinations in Ethiopia
• Safety and travel advisories
• Best time to visit
• Visa requirements
• Vaccinations and health
• Currency and money matters

What would you like to know more about?`,
};

function findBestResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("must") || lowerMessage.includes("see") || lowerMessage.includes("visit") || lowerMessage.includes("places")) {
    return knowledgeBase["must-see"];
  }
  if (lowerMessage.includes("safe") || lowerMessage.includes("danger") || lowerMessage.includes("security")) {
    return knowledgeBase["safety"];
  }
  if (lowerMessage.includes("time") || lowerMessage.includes("when") || lowerMessage.includes("season") || lowerMessage.includes("weather")) {
    return knowledgeBase["best time"];
  }
  if (lowerMessage.includes("visa") || lowerMessage.includes("entry") || lowerMessage.includes("passport")) {
    return knowledgeBase["visa"];
  }
  if (lowerMessage.includes("vaccin") || lowerMessage.includes("health") || lowerMessage.includes("medical") || lowerMessage.includes("malaria")) {
    return knowledgeBase["vaccinations"];
  }
  if (lowerMessage.includes("money") || lowerMessage.includes("currency") || lowerMessage.includes("birr") || lowerMessage.includes("atm") || lowerMessage.includes("exchange")) {
    return knowledgeBase["currency"];
  }

  return knowledgeBase["default"];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = findBestResponse(message);

    return NextResponse.json({ response });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
