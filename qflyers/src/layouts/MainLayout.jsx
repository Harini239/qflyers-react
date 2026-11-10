import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useScrollTop from '../hooks/useScrollTop';
export default function MainLayout() {
  useScrollTop();
  return (<><a className="skip" href="#main">Skip to content</a><Header /><main id="main"><Outlet /></main><Footer /></>);
}
