"use client";
import Head from 'next/head';
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0554af] to-[#6e93d9] p-10 flex flex-col justify-center items-center">
            <Head>
        <title>Weather AI</title>
        <meta name="description" content="Get weather information powered by OpenAI" />
      </Head>
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0 + More!
        </Subtitle>
        <Subtitle className="text-xl text-center">
          Built by Diana Zawislak
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#6e93d9]] to-[#0554af]">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
