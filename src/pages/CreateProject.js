import React from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../Firebase";
import { addDoc, collection } from "@firebase/firestore";

const CreateProject = () => {
  const [images, setImages] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [languages, setLanguages] = React.useState("");
  const [link, setLink] = React.useState("");
  const [urls, setUrls] = React.useState([]);

  const [progress, setProgress] = React.useState(0);

  const upload = () => {
    if (!images) return;

    images.forEach((image) => {
      const storageRef = ref(storage, `/images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          setProgress(prog);
        },
        (err) => console.error(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUrls((prev) => [...prev, url]);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const langs = languages.split(",");

    addDoc(collection(db, "projects"), {
      title,
      description,
      languages: langs,
      images: urls,
      link,
    })
      .then((r) => {
        console.log("Upload Success!", r.id);
      })
      .catch((err) => console.error(err));

    setTitle("");
    setDescription("");
    setLanguages("");
    setLink("");
    setImages([]);
  };

  return (
    <section className="">
      <div className=" page-section bg-dark flex items-center ">
        <i className="bi bi-arrow-left text-5xl btn btn-primary font-bold mx-3 h-10"></i>

        {/* <!-- projects --> */}
        <div className=" px-4 py-5 relative">
          <h4 className="mb-4 text-uppercase text-gray-100 font-bold">
            Create New Project
          </h4>
        </div>
      </div>

      <div className="container relative">
        <form
          className="px-3 bg-gray-100 md:w-11/12 mx-auto absolute pb-4"
          action=""
          style={{ top: "-80px" }}
        >
          <div className="text-center text-indigo-700 mx-auto border-b-2 mb-3 border-indigo-700 slab text-2xl uppercase py-1 lg:w-3/12 md:6/12 ">
            new Project
          </div>
          <div className=" absolute top-1">
            <button
              class="bg-red-600 rounded-full w-12 h-12"
              onClick={(e) => {
                e.preventDefault();
                setImages([]);
                setUrls([]);
              }}
            >
              <i class="bi bi-trash2-fill text-text-3xl text-gray-50"></i>
            </button>
          </div>
          {/* title */}
          <div className="title w-10/12 mx-auto mt-14">
            <label className="slab text-xl text-gray-600 px-1" htmlFor="">
              Title
            </label>
            <input
              type="text"
              className="px-2 py-3 w-full rounded"
              placeholder="input project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* descripton */}
          <div className="title w-10/12 mx-auto mt-4">
            <label className="slab text-xl text-gray-600 px-1" htmlFor="">
              Project Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* languages */}
          <div className="title w-10/12 mx-auto mt-4">
            <label className="slab text-xl text-gray-600 px-1" htmlFor="">
              Languages
            </label>
            <input
              type="text"
              className="px-2 py-3 w-full rounded"
              placeholder="input project title"
              value={languages}
              onChange={(e) => setLanguages(e.target.value.slice(","))}
            />
          </div>
          {/* link */}
          <div className="title w-10/12 mx-auto mt-4">
            <label className="slab text-xl text-gray-600 px-1" htmlFor="">
              Link
            </label>
            <input
              type="text"
              className="px-2 py-3 w-full rounded"
              placeholder="input project link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          {/* images */}
          <div className=" w-10/12 mx-auto mt-4">
            <label className="slab form-label">Project screen shots</label>
            <div className="flex">
              <input
                className="form-control"
                type="file"
                id="formFileMultiple"
                multiple
                onChange={(e) => setImages([...e.target.files])}
              />
              <button
                className="bg-indigo-700 rounded p-2 text-white"
                onClick={upload}
              >
                upload
              </button>
            </div>
            <br />

            <span className="text-gray-500">image_name.jpg</span>
            <div className="progress">
              <div
                className="progress-bar bg-indigo-700"
                role="progressbar"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {progress}%
              </div>
            </div>
          </div>

          {/* uploaded images */}
          <div className="row mx-auto col-lg-11 mt-4 flex bg-white py-3">
            {urls &&
              urls.map((url, id) => (
                <div
                  key={id}
                  className="col-lg-2 col-md-3 col-4 flex items-center my-3"
                >
                  <img src={url} alt="img" />
                </div>
              ))}
          </div>

          {/* create button */}
          <div className="flex">
            <button
              type="submit"
              className="slab bg-indigo-700 py-2 text-white mx-auto my-4 uppercase w-1/2"
              onClick={handleSubmit}
            >
              create
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateProject;
