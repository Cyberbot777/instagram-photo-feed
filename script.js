const elements = {
  postForm: document.getElementById("postForm"),
  postImage: document.getElementById("postImage"),
  postCaption: document.getElementById("postCaption"),
  imageGrid: document.getElementById("imageGrid"),
  postModal: document.getElementById("postModal"),
  gridViewBtn: document.getElementById("gridViewBtn"),
  inlineViewBtn: document.getElementById("inlineViewBtn"),
};

function applyView(view) {
  const items = elements.imageGrid.querySelectorAll(".grid-item");
  if (view === "grid") {
    items.forEach((item) => {
      item.classList.remove("inline");
      item.classList.add("col-4", "p-0");
    });
    elements.gridViewBtn.classList.add("active");
    elements.inlineViewBtn.classList.remove("active");
  } else {
    items.forEach((item) => {
      item.classList.remove("col-4", "p-0");
      item.classList.add("inline");
    });
    elements.inlineViewBtn.classList.add("active");
    elements.gridViewBtn.classList.remove("active");
  }
}

elements.gridViewBtn.addEventListener("click", () => applyView("grid"));
elements.inlineViewBtn.addEventListener("click", () => applyView("inline"));

elements.postForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const imageUrl = elements.postImage.value;
  const newImage = `
        <div class="grid-item">
            <img src="${imageUrl}" class="grid-img" alt="New Post">
        </div>
    `;
  elements.imageGrid.insertAdjacentHTML("afterbegin", newImage);
  elements.postImage.value = "";
  elements.postCaption.value = "";
  const modal = bootstrap.Modal.getInstance(elements.postModal);
  modal.hide();
  applyView(
    elements.inlineViewBtn.classList.contains("active") ? "inline" : "grid"
  );
});
