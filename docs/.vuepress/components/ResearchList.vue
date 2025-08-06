<template>
    <!-- <ul>
        <template v-for="(post, i) in blogPosts" :key="i">
            <li v-if="i < 3" :style="i == 2 ? 'border-bottom:none' : ''">
                <router-link :to="post.path">📌 <b>{{ post.info.title }}</b> </router-link>
                <div>
                    <span v-if="post.info.date">{{ (post.info.date) }}</span>
                    <span v-if="post.info.category && post.info.category.length > 0">|</span>
                    <span v-if="post.info.category && post.info.category.length > 0">
                        <span v-for="(cat, c) in post.info.category" :key="c"> {{ cat }}
                            <span v-if="c < post.info.category.length">·</span>
                        </span>

                    </span>
                </div>
                <div>{{ post.info.description }}</div>

            </li>

        </template>
    </ul> -->


    <div>
        <template v-if="type == 1" class="s-li" v-for="(post, i) in blogPosts_1" :key="i">
            <router-link :to="post.path">
                <h4><b>{{ i + 1 }}. {{ post.info.title }}</b></h4>
            </router-link>

            <p v-if="lang == 'zh-CN'" style="margin-top: 5px;">
                <b>{{ post.info.date }} | 导师 ： {{ post.info.teacher }}</b>
            </p>

            <p v-else style="margin-top: 5px;"><b>Advisor:{{ post.info.teacher }}</b></p>

            <ul>
                <li v-if="lang == 'zh-CN'">
                    <b>研究内容</b>：{{ post.info.description }}
                </li>
                <li v-else>
                    <b>Research Focus</b>:{{ post.info.description }}
                </li>


                <li v-if="lang == 'zh-CN'">
                    <b>技术方法</b>：
                    <template v-for="(item, n) in post.info.method" :key="n"> <br>▶{{ item }}</template>
                </li>
                <li v-else>
                    <b>Technical Approach</b>:
                    <template v-for="(item, n) in post.info.method" :key="n"> <br>▶{{ item }}</template>
                </li>


                <li v-if="lang == 'zh-CN'">
                    <b>技术栈</b>：{{ post.info.technology }}
                </li>
                <li v-else>
                    <b>Technical Stack</b>:{{ post.info.technology }}
                </li>

                <li v-if="lang == 'zh-CN'">
                    <b>核心成果</b>：
                    <template v-for="(item, n) in post.info.findings" :key="n"> <br>▶
                        <span v-html="item"></span>
                    </template>
                </li>
                <li v-else>
                    <b>Key Achievements</b>:
                    <template v-for="(item, n) in post.info.findings" :key="n"> <br>▶
                        <span v-html="item"></span>
                    </template>
                </li>
            </ul>
        </template>


        <template v-if="type == 2" class="s-li" v-for="(post, i) in blogPosts_2" :key="i">
            <router-link :to="post.path">
                <h4><b>{{ i + 1 }}. {{ post.info.title }}</b></h4>
            </router-link>

            <p v-if="lang == 'zh-CN'" style="margin-top: 5px;">
                <b>{{ post.info.date }} | 导师 ： {{ post.info.teacher }}</b>
            </p>
            <p v-else style="margin-top: 5px;"><b>Advisor:{{ post.info.teacher }}</b></p>

            <ul>
                <li v-if="lang == 'zh-CN'">
                    <b>个人角色</b>：{{ post.info.role }}
                </li>
                <li v-else>
                    <b>Role</b>:{{ post.info.role }}
                </li>


                <li v-if="lang == 'zh-CN'">
                    <b>具体贡献</b>：
                    <template v-for="(item, n) in post.info.contribution" :key="n"> <br>▶
                        <span v-html="item"></span>
                        
                    </template>
                </li>
                <li v-else>
                    <b>Key Contributions</b>:
                    <template v-for="(item, n) in post.info.contribution" :key="n"> <br>▶
                        <span v-html="item"></span>
                    </template>
                </li>
            </ul>
        </template>

    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useLang } from '../layouts/useLang'
import { useBlogType } from '@vuepress/plugin-blog/client';
const props = defineProps({
    type: { type: Number, required: true }
});
const lang = computed(() => useLang());

const { items: blogPosts } = useBlogType('research').value;
const blogPosts_1 = blogPosts.filter(x => x.info.category.includes(1))
const blogPosts_2 = blogPosts.filter(x => x.info.category.includes(2))
const getC = (text) => {
    const regex = /<a\s+href=["\']?([^"\'>]+)["\']?>(.*?)<\/a>|([^<]+)/g;
    let match;
    const results = [];

    while ((match = regex.exec(text)) !== null) {
        if (match[1]) { // 匹配到 <a> 标签
            const href = match[1]; // 提取链接地址
            const textContent = match[2]; // 提取标签内的文字
            results.push({ text: textContent.trim(), href });
        } else if (match[3]) { // 匹配到普通文字
            const textContent = match[3]; // 提取普通文字
            results.push({ text: textContent.trim(), href: '' });
        }
    }

    console.log(results);
    return results;
}

</script>

<style scoped></style>