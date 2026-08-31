interface AchievementProps {
  imageLocation: string;
  achievement: string;
  color: string;
}

function Achievement({ imageLocation, achievement, color }: AchievementProps) {



  return (

  

    <div className="flex flex-col items-center text-center">
      
      {/* Fixed positioning area */}
      <img
          className="h-10 w-10 object-contain"
          src={imageLocation}
          alt={achievement}
        />

     <p className="mt-2 max-w-[100px] font-semibold">
        {achievement.split("").map((character, index) => (
          <span
            key={index}
            className={/\d/.test(character) ? color : "text-black"}
          >
            {character}
          </span>
        ))}
      </p>

    </div>
  );
}

export default Achievement;