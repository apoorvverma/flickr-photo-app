import { useEffect, useState } from "react";
import axios from "axios";
import ReactModal from "react-modal";
import InfiniteScroll from "react-infinite-scroll-component";

ReactModal.setAppElement("#root");

const ImageApi = ({ searchText }) => {
  const [photosArr, setPhotosArr] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState({});
  const [page, setPage] = useState(15);

  const apiKey = "f1d0ccb4146a5adcd6540a14f2f4b11e";
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=${page}&page=1&format=json&nojsoncallback=1`;
  const searchUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchText}&per_page=${page}&page=1&format=json&nojsoncallback=1`;

  function toggleModal(image) {
    setIsOpen(!isOpen);
    if (!isOpen) setImageIndex(image);
  }

  useEffect(() => {
    async function getResponse() {
      let response = {};

      searchText === ""
        ? (response = await axios.get(url))
        : (response = await axios.get(searchUrl));
      const imgArr = response.data.photos.photo;

      setPhotosArr(imgArr);
    }
    getResponse();
  }, [searchText, page]);

  return (
    <InfiniteScroll
      dataLength={photosArr.length}
      next={() => setPage(page + 20)}
      hasMore={true}
      scrollThreshold="400px"
    >
      <div className="pt-32 flex flex-wrap gap-5 justify-center">
        {photosArr.map((photo) => (
          <img
            className="flex-1 h-full w-full object-cover"
            key={photo.id}
            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt=""
            onClick={() => toggleModal(photo)}
          />
        ))}
        <ReactModal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="View Image"
        >
          <div className="flex justify-center">
            <img
              key={imageIndex.id}
              src={`https://live.staticflickr.com/${imageIndex.server}/${imageIndex.id}_${imageIndex.secret}.jpg`}
              alt=""
            />
          </div>
          <p className="mt-5">Tap outside to close!</p>
        </ReactModal>
      </div>
    </InfiniteScroll>
  );
};

export default ImageApi;
