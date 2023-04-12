const fileUpload = (e) => {
  e.preventDefault();
  let imageTag = e.target.parentElement.previousSibling.children[0];
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.onloadend = async function () {
    imageTag.src = reader.result;
    imageTag.classList.add("visible");
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    imageTag.src = "";
  }
};

export default fileUpload;
