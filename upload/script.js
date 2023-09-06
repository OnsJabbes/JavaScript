const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 10000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}

    
const deleteButton = document.getElementById("delete-image");
deleteButton.addEventListener("click", handleImageDelete);

function handleImageDelete() {
  const image = document.querySelector("img");
  if (image) {
    image.remove();
     
  }
}
})