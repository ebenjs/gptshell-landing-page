<script setup lang="ts"></script>
<template>
  <div>
    <div class="terminal-wrapper mx-auto">
      <div class="terminal-spacer">
        <div class="terminal-header">
          <span class="terminal-button"></span>
          <span class="terminal-button"></span>
          <span class="terminal-button"></span>
        </div>
        <div class="terminal-content">
          <p class="terminal-line">
            <span style="color: lightgreen; font-weight: 400"> user </span>
            <span style="color: lightblue; font-weight: 400">~</span>
            : $
            <span class="ms-1"> gptshell ask -p "What is JAVA?" </span>
          </p>
          <p class="terminal-line">
            <span style="color: lightblue; font-weight: 400">[ gpt-shell-prompt ]</span>
            <span> : What is JAVA?</span>
          </p>
          <p class="terminal-line">
            <span style="color: lightcoral; font-weight: 400">[ gpt-shell-response ]</span>
            <span>
              : Java is a high-level, object-oriented programming language that is widely used for
              developing secure, scalable, and platform-independent applications.
            </span>
          </p>
          <p class="terminal-line">
            <span style="color: lightgreen; font-weight: 400"> user </span>
            <span style="color: lightblue; font-weight: 400">~</span>
            <span>: $</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.terminal-wrapper {
  width: 450px;
  border-radius: 10px;
}

.terminal-spacer {
  background: #191724;
  border-color: #000;
  border-radius: 10px;
}

.terminal-header {
  height: 34px;
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 5px;

  .terminal-button {
    margin-left: 8px;
    border-radius: 50%;
    display: inline-block;
    width: 12px;
    height: 12px;

    &:nth-of-type(1) {
      background: #ff5f56;
    }

    &:nth-of-type(2) {
      background: #ffbd2e;
    }

    &:nth-of-type(3) {
      background: #27c93f;
    }
  }
}

.terminal-content {
  font-family: 'Fira Sans', sans-serif;
  color: $default-color;
  font-weight: 300;
  padding: 12px 14px;
  flex: 1 1;

  .terminal-line {
    font-family: var(--font-mono);
    line-height: 1.5;
    font-size: 14px;
    white-space: pre-wrap;
    word-break: break-all;
  }
}
</style>
