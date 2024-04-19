import WineDataStatisticsTable from './components/WineDataStatisticsTable';
import { newWineData } from './services/dataServices';

function App() {
  return (
    <div className="App">
      <WineDataStatisticsTable wineData={(newWineData)} property="Flavanoids" />
      <WineDataStatisticsTable wineData={(newWineData)} property="Gamma" />
    </div>
  );
}

export default App;
