// Create a <style> element
const styles = document.createElement("style");
styles.innerHTML = `
  .toggle-container {
    background: rgba(218, 218, 218, 0.897);
    height: 30px;
    width: 80px;
    position: relative;
    transition: all 0.2s ease;
    border-radius: 20px;
    box-shadow: 0 0 0px blue;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px;
    cursor: pointer;
  }

  .toggle-input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
  }

  .toggle-slider {
    position: absolute;
    background: rgb(255, 255, 255);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transition: 0.3s ease;
    scale: 122%;
    left: 10px;
  }

  .toggle-input:checked + .toggle-slider {
    margin-left: 50%;
  }

  .toggle-container:has(.toggle-input:checked) {
    background: rgb(0, 76, 255);
  }
`;
document.head.appendChild(styles);

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-toggle]").forEach(el => {
    let size = el.getAttribute("data-toggle-size") || "medium";
    let color = el.getAttribute("data-toggle-color") || "gray";

    let container = document.createElement("label");
    container.classList.add("toggle-container", size);
    container.style.background = color;

    let input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("toggle-input");

    let slider = document.createElement("span");
    slider.classList.add("toggle-slider");

    container.appendChild(input);
    container.appendChild(slider);
    el.replaceWith(container);

    // Toggle event listener
    input.addEventListener("change", function () {
      container.setAttribute("data-checked", input.checked);
      container.dispatchEvent(new Event("toggleChange"));
    });

  });
});

// Example usage: Listen for toggle change
document.addEventListener("toggleChange", function (e) {
  console.log("Toggle switched:", e.target.getAttribute("data-checked"));
});
