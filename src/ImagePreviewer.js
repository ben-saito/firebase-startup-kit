import React from 'react';
import "firebase/firestore";

class ImagePreviewer extends React.Component {
  constructor(props) {
    super(props);

    this.onImageSelected = this.onImageSelected.bind(this);
  }

  onImageSelected(e) {
    const file = e.target.files[0];
    const fr = new FileReader();

    fr.onload = () => {
      const imgNode = this.refs.image;
      // fr.onload = (event) => { ... } ‚Æ‚µ‚Ä
      // event.target.result ‚ÅŽæ‚é•û–@‚à‚ ‚é
      imgNode.src = fr.result;
    };
    fr.readAsDataURL(file);
  }

  render() {
    return (
      <div>
        <input type="file" accept="image/*" onChange={this.onImageSelected} />
        <p>Image will be previewed here!</p>
        <img ref="image" src="" alt="[Get Gazou]"/>
      </div>
    );
  }
}

export default ImagePreviewer;