import indexPage from './pages/index'
import indexSections from './sections/indexSections'
import dynForm from './components/dynForm'
import list from './components/list'
import img from './components/img'

export const contextData = {
  "/index.html": { ...indexPage, ...indexSections, dynForm, list, img },
};
