/**
 * Slider Functionality for Property Listings
 * Handles image gallery navigation with keyboard and button controls
 */

let sliderState = {
  tabanan: { current: 0, total: 3 }
};

/**
 * Update slider position and indicators
 * @param {string} id - Slider identifier
 */
function updateSlider(id) {
  const state = sliderState[id];
  const wrapper = document.getElementById(`slider-${id}`);
  const offset = -state.current * 100;
  wrapper.style.transform = `translateX(${offset}%)`;
  
  // Update counter
  const counter = document.getElementById(`slider-count-${id}`);
  if (counter) counter.textContent = state.current + 1;
  
  // Update dots
  const dots = document.querySelectorAll(`#slider-dots-${id} .slider-dot`);
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === state.current);
  });
}

/**
 * Move to next slide
 * @param {string} id - Slider identifier
 */
function sliderNext(id) {
  const state = sliderState[id];
  state.current = (state.current + 1) % state.total;
  updateSlider(id);
}

/**
 * Move to previous slide
 * @param {string} id - Slider identifier
 */
function sliderPrev(id) {
  const state = sliderState[id];
  state.current = (state.current - 1 + state.total) % state.total;
  updateSlider(id);
}

/**
 * Jump to specific slide
 * @param {string} id - Slider identifier
 * @param {number} index - Slide index
 */
function sliderGoto(id, index) {
  sliderState[id].current = index;
  updateSlider(id);
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') sliderNext('tabanan');
  if (e.key === 'ArrowLeft') sliderPrev('tabanan');
});
