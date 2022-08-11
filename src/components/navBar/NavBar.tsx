import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './App.css';

interface PartsProps {
  title: string;
  url: string;
};

const parts = [
  {
    title: 'home',
    url: '/',
  },
  {
    title: 'people',
    url: '/people',
  },
  {
    title: 'films',
    url: '/films',
  },
  {
    title: 'starships',
    url: '/starships',
  },
  {
    title: 'planets',
    url: '/planets',
  },
  {
    title: 'force side',
    url: '/forceside',
  },
];

interface objProps {
  isActive: string,
  pages: PartsProps[]
};

let obj: objProps = {
  isActive: 'home',
  pages: parts
};

const NavBar = () => {

  const [active, setActive] = useState<objProps>(obj);
  const history = useHistory();
  const location = useLocation();

  const replace = (str: string): string => {
    return str.replace(/\s/g, '').replace('/', '');
  };

  const changeActive = (index: number) => {
    setActive({...active, isActive: replace(active.pages[index].title)})
  };

  const changeActiveStyles = (index: number) => {
    if (replace(active.pages[index].title) === active.isActive) {
      return 'text active';
    }
    return 'text inactive';
  };

  useEffect(() => {
    const path: string = history.location.pathname.replace('/', '');
    setActive({...active, isActive: path ? path : 'home'});
  }, []);

  useEffect(() => {
    const path: string = replace(history.location.pathname);
    setActive({...active, isActive: path ? path : 'home'});
  }, [location]);

  return (
    <div className='container'>
      <div className='logo'/>
      <ul className='page'>
        { parts.map((item, index) => {return (
            <li key={index}>
              <Link 
                to={item.url} 
                className={changeActiveStyles(index)} 
                onClick={() => changeActive(index)}>
                {item.title}
              </Link>
            </li>
          )})}
      </ul>
    </div>
  )
};

export default NavBar