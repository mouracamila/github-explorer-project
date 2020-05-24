import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight, FiX, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error, ClearButton } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  function handleCleanAll() {
    setRepositories([]);
  }

  function handleRemoveRepository(name: string) {
    const newRepositories = repositories.filter(
      (item) => item.full_name !== name,
    );
    setRepositories(newRepositories);
  }

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('To continue you need add the repository owner/name.');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Do not find this repository');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories in the Github </Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Type the repository name here"
        />
        <button type="submit">Submit</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <div key={repository.full_name}>
            <button
              onClick={() => handleRemoveRepository(repository.full_name)}
            >
              <FiX size={20} />
            </button>
            <Link to={`/repositories/${repository.full_name}`}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </Link>
          </div>
        ))}
        {repositories.length > 1 && (
          <ClearButton onClick={handleCleanAll}>
            <FiTrash2 size={20} />
            Clean all
          </ClearButton>
        )}
      </Repositories>
    </>
  );
};

export default Dashboard;
