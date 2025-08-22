import ChessBoard from "../components/Analysis/ChessBoard";
import Card from "../components/Analysis/rightCard";

const Analysis = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 md:p-10 gap-6">
      <div className="w-full md:flex-1 md:pt-[50px] md:pr-[50px] md:pl-[150px]">
        <ChessBoard />
      </div>
      <div className="w-full md:max-w-[600px] h-full md:pt-[50px] md:pr-[100px]">
        <Card />
      </div>
    </div>
  );
};

export default Analysis;
