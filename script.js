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
      item.querySelector(".inline-header").style.display = "none";
      item.querySelector(".inline-footer").style.display = "none";
    });
    elements.gridViewBtn.classList.add("active");
    elements.inlineViewBtn.classList.remove("active");
  } else {
    items.forEach((item) => {
      item.classList.remove("col-4", "p-0");
      item.classList.add("inline");
      item.querySelector(".inline-header").style.display = "flex";
      item.querySelector(".inline-footer").style.display = "block";
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
  const caption = elements.postCaption.value;
  const newImage = `
    <div class="grid-item">
      <button class="delete-btn position-absolute top-0 end-0">×</button>
      <div class="inline-header">
        <h5>New Post</h5>
        <p class="date">${new Date().toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
        })}</p>
      </div>
      <img src="${imageUrl}" class="grid-img" alt="New Post">
      <div class="inline-footer">
        <p class="likes">0 Likes</p>
        <p class="caption">${
          caption ||
          "This is an example of a very good photo that you can post on instagram"
        }</p>
      </div>
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

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const post = e.target.closest(".grid-item");
    const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
    deleteModal.show();

    const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
    const handleConfirm = function () {
      post.remove();
      applyView(
        elements.inlineViewBtn.classList.contains("active") ? "inline" : "grid"
      );
      deleteModal.hide();
      confirmDeleteBtn.removeEventListener("click", handleConfirm); 
    };
    confirmDeleteBtn.addEventListener("click", handleConfirm);
  }
});

document.addEventListener("DOMContentLoaded", () => applyView("grid"));