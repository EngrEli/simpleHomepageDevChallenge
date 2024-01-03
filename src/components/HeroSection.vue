<script setup></script>

<template>
  <div class="flex mt-[40px] flex-col-reverse lg:flex-row">
    <div class="left-hero flex-1 flex flex-col mt-[50px]">
      <div class="left-hero-top text-base font-semibold">
        😎 SIMPLE WAY TO COMMUNICATE
      </div>
      <div
        class="left-hero-main font-extrabold text-6xl leading-[80px] sm:leading-[100px] text-light-text mb-[20px]"
      >
        Actions for <br />
        Accessibility <br />
        in Design
      </div>
      <div class="left-hero-sub text-lg text-grey font-medium mb-[15px]">
        The fastest way to build and deploy websites with <br />
        reusable components
      </div>
      <div class="left-hero-action-btns mb-[15px]">
        <button
          class="py-3 px-7 mr-8 bg-button-color text-white rounded-xl font-semibold"
        >
          GET STARTED
        </button>
        <button
          class="text-button-color underline underline-offset-4 font-semibold"
        >
          Get live demo
        </button>
      </div>
      <div class="left-hero-bottom-part flex gap-5 text-sm">
        <div class="check-text">
          <img
            src="../assets/checkbox.svg"
            alt="checkbox that is checked"
            class="fkex-1"
          />
          <span>No credit card required</span>
        </div>
        <div class="check-text">
          <img
            src="../assets/checkbox.svg"
            alt="checkbox that is checked"
            class="flex-1"
          />
          <span>No software to install</span>
        </div>
      </div>
    </div>
    <div class="right-hero flex-1">
      <img
        src="../assets/hero-image-simple-homepage.png"
        alt="Programmer with laptop"
      />
    </div>
  </div>
</template>

<style>
.check-text {
  @apply flex items-center gap-2 text-grey;
}

.check-text img {
  filter: invert(53%) sepia(13%) saturate(1663%) hue-rotate(75deg)
    brightness(99%) contrast(88%);
}

.dark .left-hero-top,
.dark .left-hero-main {
  @apply text-body-background;
}
</style>
