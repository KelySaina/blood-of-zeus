import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlayCircle } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  // Episodes with titles, view links, download links, and thumbnails
  const episodes = [
    {
      title: 'Blood of Zeus - S1E8: War for Olympus - 37:50',
      viewLink: 'https://drive.google.com/file/d/17BoX0HIa3ihp24uTz4Y0lqWiur3ZVk5p/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?id=17BoX0HIa3ihp24uTz4Y0lqWiur3ZVk5p&export=download',
      thumbnail: '/images/thumbnails/ep8',
    },
    {
      title: 'Blood of Zeus - S1E7: The Fields of the Dead - 34:18',
      viewLink: 'https://drive.google.com/file/d/1bXOurnanSugnHGvmDJd8biZUQSj2TuTc/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?id=1bXOurnanSugnHGvmDJd8biZUQSj2TuTc&export=download',
      thumbnail: '/images/thumbnails/ep7',
    },
    {
      title: 'Blood of Zeus - S1E6: Back to Olympus - 32:18',
      viewLink: 'https://drive.google.com/file/d/1r4v8hWfjrdfEWZdBcTL0_6QXG2yn5uaN/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?id=1r4v8hWfjrdfEWZdBcTL0_6QXG2yn5uaN&export=download',
      thumbnail: '/images/thumbnails/ep6',
    },
    {
      title: 'Blood of Zeus - S1E5: Escape or Die - 25:52',
      viewLink: 'https://drive.google.com/file/d/1ZlSGbHFe7pKAYOz9evoUtNl8j4zl3lPw/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?id=1ZlSGbHFe7pKAYOz9evoUtNl8j4zl3lPw&export=download',
      thumbnail: '/images/thumbnails/ep5',
    },
    {
      title: 'Blood of Zeus - S1E4: A Monster is Born - 31:34',
      viewLink: 'https://drive.google.com/file/d/1lwUppRQWqomdE83xL1afshQE6oK9CAG2/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?id=1lwUppRQWqomdE83xL1afshQE6oK9CAG2&export=download',
      thumbnail: '/images/thumbnails/ep4',
    },
    {
      title: 'Blood of Zeus - S1E3: The Raid - 27:02',
      viewLink: 'https://drive.google.com/file/d/1yL0xrzI9E1uj4BDRy7rnTNTegpTXb_Tu/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?id=1yL0xrzI9E1uj4BDRy7rnTNTegpTXb_Tu&export=download',
      thumbnail: '/images/thumbnails/ep3',
    },
    {
      title: 'Blood of Zeus - S1E2: Past is Prologue - 31:06',
      viewLink: 'https://drive.google.com/file/d/1PFyU9RY3FAZaYcgdxfraT44a1se82hkO/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?id=1PFyU9RY3FAZaYcgdxfraT44a1se82hkO&export=download',
      thumbnail: '/images/thumbnails/ep2',
    },
    {
      title: 'Blood of Zeus - S1E1: A Call to Arms - 27:38',
      viewLink: 'https://drive.google.com/file/d/10KEmada-ftzWIgc5LfZ4JFpzcwNvY6iD/view?usp=drive_link',
      downloadLink: 'https://drive.google.com/uc?id=10KEmada-ftzWIgc5LfZ4JFpzcwNvY6iD&export=download',
      thumbnail: '/images/thumbnails/ep1',
    },
  ];

  const tags = [
    "Adult Animation",
    "Anime",
    "Dark Fantasy",
    "Action",
    "Andventure"
  ]

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 p-4'>
        <div>
          <img src="/images/favicon.ico" alt='Blood of Zeus' className='border-2 rounded-lg shadow-md w-full' />
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className="text-3xl lg:text-6xl font-bold mb-4 text-blue-800 text-center cursive animate-pulse"> &#9829;For Mima&#9829;</h1>
          <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">Blood of Zeus</h1>
          <p className="text-lg text-justify text-gray-700 mb-2">
            A commoner living in ancient Greece, Heron discovers his true heritage as a son of Zeus, and his purpose: to save the world from a demonic army.
          </p>
          <p className="text-lg font-semibold text-gray-600 mb-2">
            {`${episodes.length} episodes`}
          </p>
          <p className="text-gray-500 mb-2">
            {tags.map((tag, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </p>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-gray-800 text-left">List of Episodes</h1>
      <p className="text-xl text-gray-700 mb-2">
        Season 1
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {episodes.reverse().map((episode, index) => (
          <div
            key={index}
            className="block bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={episode.thumbnail}
              alt={episode.title}
              className="rounded-t-lg w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{episode.title}</h2>
              <div className="flex justify-between items-center">
                <a
                  href={episode.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faPlayCircle}/>
                  <span>View Episode</span>
                </a>
                <a
                  href={episode.downloadLink}
                  download
                  className="text-blue-500 px-2 py-2 rounded-lg hover:underline transition flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div class="bg-white-200 rounded-lg shadow m-4 p-4 text-center">
        <span class="text-sm text-gray-800 text-center py-4">
          © Kely Saina 2024. All Rights Reserved.
        </span>
      </div>

    </div>
  );
};

export default App;
