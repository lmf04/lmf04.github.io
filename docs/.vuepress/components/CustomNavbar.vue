<script setup>
import VPNavbarBrand from '@theme/VPNavbarBrand.vue'
import VPNavbarItems from '@theme/VPNavbarItems.vue'
import VPToggleColorModeButton from '@theme/VPToggleColorModeButton.vue'
import VPToggleSidebarButton from '@theme/VPToggleSidebarButton.vue'
import { useData } from '@theme/useData'
import { DeviceType, useUpdateDeviceStatus } from '@theme/useUpdateDeviceStatus'
import { hasGlobalComponent } from '@vuepress/helper/client'
import { computed, ref, resolveComponent, useTemplateRef } from 'vue'

defineEmits(['toggleSidebar'])

const slots = defineSlots({
  before: { type: Function },
  after: { type: Function }
})

const SearchBox = hasGlobalComponent('SearchBox')
  ? resolveComponent('SearchBox')
  : () => null

const { themeLocale } = useData()

const navbar = useTemplateRef('navbar')
const navbarBrand = useTemplateRef('navbar-brand')

const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  return linksWrapperMaxWidth.value
    ? { maxWidth: `${linksWrapperMaxWidth.value}px` }
    : {}
})

const getCssValue = (el, property) => {
  const val = el?.ownerDocument.defaultView?.getComputedStyle(el, null)[property]
  const num = parseInt(val, 10)
  return isNaN(num) ? 0 : num
}

useUpdateDeviceStatus(DeviceType.Mobile, (mobileDesktopBreakpoint) => {
  const navbarHorizontalPadding = 
    getCssValue(navbar.value, 'paddingLeft') +
    getCssValue(navbar.value, 'paddingRight')

  linksWrapperMaxWidth.value = 
    window.innerWidth < mobileDesktopBreakpoint
      ? 0
      : navbar.value.offsetWidth - 
        navbarHorizontalPadding - 
        (navbarBrand.value?.offsetWidth || 0)
})
</script>

<template>
  <header ref="navbar" class="vp-navbar" vp-navbar>
    <VPToggleSidebarButton @toggle="$emit('toggleSidebar')" />

    <span ref="navbar-brand">
      <VPNavbarBrand />
    </span>

    <div class="vp-navbar-items-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <VPNavbarItems class="vp-hide-mobile" />
      <slot name="after" />
      <VPToggleColorModeButton v-if="themeLocale.colorModeSwitch" />
      <component :is="SearchBox" />
    </div>
  </header>
</template>

<style lang="scss">
@use '../styles/variables' as *;

.vp-navbar {
  --navbar-line-height: calc(
    var(--navbar-height) - 2 * var(--navbar-padding-v)
  );

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;

  box-sizing: border-box;
  height: var(--navbar-height);
  padding: var(--navbar-padding-v) var(--navbar-padding-h);
  border-bottom: 1px solid var(--vp-c-border);

  background-color: var(--vp-navbar-c-bg);

  line-height: var(--navbar-line-height);

  transition:
    background-color var(--vp-t-color),
    border-color var(--vp-t-color);

  @media screen and (max-width: $MQMobile) {
    padding-inline-start: 4rem;
  }
}

.vp-navbar-items-wrapper {
  position: absolute;
  inset-inline-end: var(--navbar-padding-h);
  top: var(--navbar-padding-v);

  display: flex;

  box-sizing: border-box;
  height: var(--navbar-line-height);
  padding-inline-start: var(--navbar-padding-h);

  font-size: 0.9rem;
  white-space: nowrap;
}
</style>
