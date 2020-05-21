import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github 🐡 </Title>

      <Form>
        <input placeholder="Type the repository name here" />
        <button type="submit">Submit</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/41678283?s=460&u=d657b8091aca5532a0095919cb293d15b802bdad&v=4"
            alt="Camila Moura"
          />
          <div>
            <strong>rocktseat/unform</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/41678283?s=460&u=d657b8091aca5532a0095919cb293d15b802bdad&v=4"
            alt="Camila Moura"
          />
          <div>
            <strong>rocktseat/unform</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/41678283?s=460&u=d657b8091aca5532a0095919cb293d15b802bdad&v=4"
            alt="Camila Moura"
          />
          <div>
            <strong>rocktseat/unform</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
