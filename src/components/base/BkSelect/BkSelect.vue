<template>
  <div ref="containerRef" class="bk-select">
    <div class="bk-select-input-container" @click="triggerSelect">
      <input
        ref="selectRef"
        v-model="value"
        :placeholder="t(placeholder)"
        class="bk-select-input"
      />
      <BkIcon
        :name="isSelectOpen ? BkIconNames['chevron-up'] : BkIconNames['chevron-down']"
        :size="BkIconSizes.s"
      />
    </div>
    <div v-if="isSelectOpen" class="bk-select-options">
      <div
        v-for="option in optionsComputed"
        :key="option.id"
        class="bk-select-option"
        @click="selectOption(option.label)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, withDefaults } from 'vue';
import { onClickOutside, useFocus } from '@vueuse/core';
import BkIcon from '@/components/base/BkIcon/BkIcon.vue';
import { useI18n } from 'vue-i18n';
import type { BkSelectProps } from '@/components/base/BkSelect/BkSelect.types.ts';
import { BkIconNames, BkIconSizes } from '@/components/base/BkIcon/BkIcon.types.ts';

const { t } = useI18n();

const props = withDefaults(defineProps<BkSelectProps>(), {
  normalizer: (option: object) => {
    return { id: option.id, label: option.name };
  },
  placeholder: 'please_select',
});

const selectRef = ref();
const { focused } = useFocus(selectRef);

const containerRef = ref();
onClickOutside(containerRef, () => closeSelect());

const isSelectOpen = ref(false);

function openSelect() {
  isSelectOpen.value = true;
}
function closeSelect() {
  isSelectOpen.value = false;
}
function triggerSelect() {
  isSelectOpen.value = !isSelectOpen.value;
}
watch(isSelectOpen, () => (focused.value = isSelectOpen.value));

const value = defineModel();

const optionsComputed = computed(() => props.options.map(option => props.normalizer(option)));
function selectOption(label: string) {
  value.value = label;
  closeSelect();
}
</script>

<style scoped lang="scss">
.bk-select {
  --select-input-background: var(--white);
  --select-input-border-color: var(--primary-200);
  --select-input-focus-border-color: var(--primary-500);
  --select-options-background: var(--white);
  --select-text-color: var(--primary-900);
  --select-placeholder-color: var(--neutral-500);
  --menu-background: var(--neutral-alpha-100);
  --menu-border-color: var(--primary-200);
  --option-hover-background: var(--neutral-100);

  position: relative;
  width: fit-content;

  .bk-select-input-container {
    .bk-select-input {
      padding: 8px 28px 8px 8px;
      color: var(--select-text-color);
      background: var(--select-input-background);
      border-radius: 10px;
      border: none;
      outline: 1px solid var(--primary-200);
      transition: outline-color 200ms ease;

      &:hover,
      &:focus {
        outline-color: var(--select-input-focus-border-color);
      }

      &::placeholder {
        color: var(--select-placeholder-color);
      }
    }

    .bk-icon {
      padding-top: 4px;
      margin-left: -24px;
    }
  }

  .bk-select-options {
    position: absolute;
    width: calc(100% + 6px);
    margin-top: 4px;
    padding: 4px 2px;
    background: var(--menu-background);
    border: 1px solid var(--menu-border-color);
    border-radius: 10px;
    max-height: 200px;
    overflow: auto;

    .bk-select-option {
      width: fit-content;
      min-width: 100%;
      padding: 4px 6px;
      border-radius: 10px;
      cursor: pointer;
      text-wrap: nowrap;

      &:hover {
        background: var(--option-hover-background);
      }
    }
  }
}
</style>
