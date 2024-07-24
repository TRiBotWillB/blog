<script setup lang="ts">

</script>

<template>
    <div>
        <h1 class="text-3xl text-center font-title">/contact</h1>

        <div class="flex justify-center mt-10">
            <form class="w-full md:w-2/3  border p-5 border-primary-muted">
                <h2 class="font-title text-xl mb-5">Contact Me</h2>

                <div>
                    <label for="email">
                        Email
                    </label>

                    <input
                        id="email"
                        placeholder="Email Address"
                        class="w-full border border-secondary bg-transparent p-2"
                    />
                </div>


                <div class="flex gap-5 mt-5">
                    <div class="w-1/2">
                        <label for="email">
                            First Name
                        </label>

                        <input
                            id="email"
                            placeholder="First Name"
                            class="w-full border border-secondary bg-transparent p-2"
                        />
                    </div>

                    <div class="w-1/2">
                        <label for="email">
                            Last Name
                        </label>

                        <input
                            id="email"
                            placeholder="Last Name"
                            class="w-full border border-secondary bg-transparent p-2"
                        />
                    </div>

                </div>


                <div class="mt-5">
                    <label for="email" class="mt-10">
                        Message
                    </label>

                    <textarea
                        id="email"
                        placeholder="Message"
                        class="w-full border border-secondary bg-transparent p-2"
                    />
                </div>

                <div class="text-center mt-10">
                    <Button class="px-5">Send</Button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>