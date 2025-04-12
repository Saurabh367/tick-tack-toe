"use client";
interface BoardProps {
  cells: (string | null)[];
  onClick: (index: number) => void;
}

const Board = ({ cells, onClick }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-full">
      {cells.map((cell, index) => (
        <button
          key={index}
          className="w-full aspect-square text-4xl font-bold bg-gray-100 dark:bg-gray-700 rounded 
                     hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50"
          onClick={() => onClick(index)}
          disabled={cell !== null}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

export default Board;