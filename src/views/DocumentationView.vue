<script setup lang="ts">
import SimpleLink from '@/components/common/SimpleLink.vue';

</script>
<template>
    <div class="wrapper p-5">
        <h1 class="default-border-bottom pb-3">Documentation</h1>

        <h2 class="mt-4">Prerequisites</h2>
        <p>
            gpt-shell is a command line tool that can be installed on any operating system.
            However, it requires any recent version of
            <SimpleLink title="Node.js" target="_blank" :underline="false" url="https://nodejs.org/en/" /> to be installed.
        </p>
        <h2 class="mt-4">Installation</h2>
        <p>
            Choose your preferred installation method below.
            Unix based systems (Linux, macOS) users can install
            gpt-shell via the command line with the following scripts:
        </p>

        <h5 class="mt-4">Automatic install on debian based distros</h5>

        <div class="code-wrapper mt-3">
            <code>curl -s https://raw.githubusercontent.com/ebenjs/gpt-shell/develop/install-scripts/install-script-deb.sh | sudo bash</code>
        </div>

        <h5 class="mt-4">Manual install from sources</h5>

        <h6 class="mt-4">Common steps for all platforms</h6>
        <div class="code-wrapper mt-3">
            <code>git clone https://github.com/ebenjs/gpt-shell.git</code>
            <br />
            <code>cd gpt-shell</code>
            <br />
            <code>npm install</code>
        </div>
        <h6 class="mt-4">Then Unix based systems (Linux, macOS) users can run:</h6>
        <div class="code-wrapper mt-3">
            <code>cp .env.example .env</code>
            <br />
            <code>sudo chmod +x index.js</code>
            <br />
            <code>ln -s "$(pwd)/index.js" /usr/local/bin/gpts</code>
        </div>
        <h6 class="mt-4">Or then Windows users:</h6>
        <div class="code-wrapper mt-3">
            <code>copy .env.example .env</code>
        </div>
        <p class="mt-3">Then you need to create a <code>gpts.cmd</code> file in <code>C:\Windows\System32</code> with the
            following
            content:</p>
        <div class="code-wrapper mt-3">
            <code>@echo off</code>
            <code>node "C:\path\to\gpt-shell\index.js" %*</code>
        </div>

        <h2 class="mt-4">Usage</h2>
        <div class="code-wrapper mt-3">
            <code>gpts ask -p "What is the meaning of life?"</code>
        </div>

        <h2 class="mt-4">Configuration</h2>
        <div class="code-wrapper mt-3">
            <code>gpts config -k YOUR_API_KEY -m MODEL_NAME -u API_URL</code>
        </div>
        <div class="mt-3">
            <p>
                <kbd>-k</kbd> or <kbd>--key</kbd> is your openai api key.
            </p>
            <p>
                <kbd>-m</kbd> or <kbd>--model</kbd> is the model name to use. Default is <kbd>gpt-3.5-turbo</kbd>.
            </p>
            <p>
                <kbd>-u</kbd> or <kbd>--url</kbd> is the url of the gpt server. Default is
                <kbd>https://api.openai.com/v1/chat/completions</kbd>.
            </p>
            <p>
                The configuration command is needed only once. It will create a .gpt-shell-config.json file in current
                directory. You can edit this file manually if you want to change the configuration.
            </p>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    color: $default-color-grey;

    .code-wrapper {
        background-color: $terminal-bg;
        border-radius: 10px;
        padding: 20px;
    }
}
</style>