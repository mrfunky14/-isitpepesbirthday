"use client";

import { useEffect, useState } from "react";

const pepeQuips = [

  "Obviously.",
  "As if there was any doubt.",
  "Pepe has spoken.",
  "The broccoli has confirmed it.",
  "Calabria has confirmed it.",
  "A very important day for Calabria.",
  "Pepe deserves a broccoli.",
  "Today, we celebrate. Tomorrow, more broccoli.",
  "This is bigger than Christmas.",
  "Pepe has been waiting all year for this.",
  "Frankly, it would be rude to suggest otherwise.",
  "We checked. It's definitely Pepe's birthday.",
  "This is not up for debate.",
  "Yes. Next question.",
  "You really needed to check?",
  "The evidence is overwhelming.",
  "Calabria called. They said yes.",
  "A historic day for Pepe and broccoli everywhere.",
  "Obviously. He's from Calabria.",
  "Happy birthday, Pepe. Have some broccoli.",
  "Pepe remains undefeated.",
  "The vibes are overwhelmingly birthday.",
  "Scientists are calling it: Pepe's birthday.",
  "Calabria called again. They said 'auguri'.",
  "Nobody knows what Pepe is doing. But he's doing it on his birthday.",
  "Pepe woke up and chose festa.",
  "Calabria is celebrating. Rome is confused.",
  "Breaking news: Pepe continues to be Pepe.",
  "Today is not a normal day. È il giorno di Pepe.",
  "Pepe's birthday is not a suggestion. It is a fact.",
  "One birthday. Zero regrets. Probably.",
  "Ragazzi, it's Pepe's birthday. Act accordingly.",
  "Experts agree: Pepe.",
  "Local authorities have declared today Pepe Day.",
  "Sorry, but you're mistaken. It is Pepe's birthday.",
  "Plot twist: it's Pepe's birthday.",
  "Why would it not be Pepe's birthday?",
  "Calabria has requested that everyone remain calm.",
  "Sources close to Pepe confirm: birthday.",
  "Pepe's lawyers have confirmed that this is indeed his birthday.",
  "The council has voted unanimously in favour of Pepe.",
  "The situation is extremely Pepe.",
  "Cesar has denied all allegations.",

];

export default function Home() {
  const [isChristmas, setIsChristmas] = useState(false);
  const [quip, setQuip] = useState("Obviously.");

  useEffect(() => {
    const today = new Date();

    setIsChristmas(
      today.getMonth() === 11 && today.getDate() === 25
    );

const randomQuip =
  pepeQuips[Math.floor(Math.random() * pepeQuips.length)];

if (randomQuip) {
  setQuip(randomQuip);
}
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f8f5ed] px-6">
      <div className="text-center">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-gray-500 mb-6">
          A very important question
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-10">
          Is it Pepe&apos;s birthday?
        </h1>

        {isChristmas ? (
          <>
            <div className="text-8xl md:text-9xl font-black tracking-tight text-gray-900">
              NO
            </div>

            <div className="text-6xl mt-6">🎄</div>

<p className="text-xl md:text-2xl text-gray-600 mt-8">
  It&apos;s Christmas.
  <br />
  Give Pepe a break.
</p>

          </>
        ) : (
          <>
            <div className="text-8xl md:text-9xl font-black tracking-tight text-gray-900">
              YES
            </div>

            <div className="text-6xl mt-6">🎂</div>

            <p className="text-xl md:text-2xl text-gray-600 mt-8">
              {quip}
            </p>
          </>
        )}
      </div>
    </main>
  );
}