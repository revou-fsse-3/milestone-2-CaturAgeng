import React from 'react';
import WeatherInformation from './WeatherInformation.tsx';
import InformationDetails from './InformationDetails.tsx';

interface WeatherStats {
  isDay: number;
  temp: number;
  condition: string;
  time: string;
  location: string;
}

interface InformationStats {
  title: string;
  value: number;
  unit: string;
  direction?: string | undefined;
}

interface CombinedDetailsProps {
    weatherStats: WeatherStats;
    informationStats: Array<{
      title: string;
      value: number;
      unit: string;
      direction?: string | undefined;
    }>;
    setCity: React.Dispatch<React.SetStateAction<string>>;
  }

const CombinedDetails: React.FC<CombinedDetailsProps> = ({ weatherStats, informationStats, setCity }) => {
  return (
    <div>
      {/* Weather Information Component */}
      <WeatherInformation setCity={setCity} stats={weatherStats} />

      {/* Information Details Component */}
      <InformationDetails stats={informationStats} />
    </div>
  );
};

export default CombinedDetails;
