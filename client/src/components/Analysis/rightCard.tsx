// RightCard.tsx
import React from "react";
import useChessGame from "../../hooks/useChessGame";

export default function RightCard() {
  const { pgn } = useChessGame();

  return (
    <div className="border-2 border-black bg-white rounded-lg shadow p-4 w-full">
      <pre className="whitespace-pre-wrap text-black">
        {pgn || "No moves yet"}
      </pre>
    </div>
  );
}
