import MeteoForm from './components/MeteoForm'
import Header from "@renderer/components/Header";
import Footer from "@renderer/components/Footer";

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="h-screen">
        <Header></Header>
        <div className="bg-gray-200">
          <MeteoForm></MeteoForm>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
