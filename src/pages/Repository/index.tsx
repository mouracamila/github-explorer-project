import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          <p>Back</p>
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/41678283?s=460&u=d657b8091aca5532a0095919cb293d15b802bdad&v=4"
            alt="Camila"
          />
          <div>
            <strong>rocktseat/unform</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              earum quisquam id non asperiores consectetur aperiam maxime atque
              magnam, repellendus laudantium sed animi doloribus iste illo
              culpa. Temporibus, ad voluptate.
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>64</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="uahuah">
          <div>
            <strong>Repository name</strong>
            <p>Description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
