<script setup lang="ts">
import SimpleLink from '@/components/common/SimpleLink.vue';
import { appGlobalConsts } from '../consts/app-consts.js';
</script>

<template>
    <div class="wrapper p-5">
        <h1 class="default-border-bottom pb-3">Support Us</h1>

        <h2 class="mt-4">Donations</h2>
        <p>gpt-shell relies on the generosity of individuals like you to sustain and improve our services. If you find
            value in what we do and would like to support us financially, please consider making a donation. Every
            contribution, no matter the size, helps us continue our mission.</p>
        <!-- Include a donation button or link here -->
        <div class="d-flex">
            <span>
                <a href="https://www.buymeacoffee.com/ebenjs" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"
                        style="height: 40px !important;width: 150px !important;" />
                </a>
            </span>

            <span class="ms-3">
                <a href="https://www.patreon.com/ebenjs" target="_blank" rel="noopener noreferrer">
                    <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron!"
                        style="height: 40px !important;width: 150px !important;" />
                </a>
            </span>
        </div>

        <h2 class="mt-4">Project Status on Git</h2>
        <p>You can find the latest updates, code, and issues related to gpt-shell on our
            <SimpleLink title="Git repository" target="_blank" :underline="false" :url="appGlobalConsts.repositoryUrl" />.
            Check out our
            repository to stay updated and
            <SimpleLink title="contribute" target="_blank" :underline="false" :url="appGlobalConsts.contributingUrl" />
            to our project's growth.
        </p>
        <!-- Include a link to your Git repository here -->

        <h2 class="mt-4">Spread the Word</h2>
        <p>Help us grow and reach a wider audience by sharing gpt-shell with your friends and colleagues. Your advocacy
            is crucial to our community's expansion.</p>
        <!-- Include social sharing options or links here -->

        <p>Thank you for considering supporting gpt-shell! Your support helps us improve and maintain our project for
            everyone.</p>

        <p>Warm regards,<br>The gpt-shell Team</p>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    color: $default-color-grey;
}
</style>