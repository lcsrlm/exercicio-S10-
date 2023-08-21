<template>
    <section class="new-section">
        <form @submit.prevent="handleSubmit" class="new-form">
            <label for="name">Nome completo</label>
            <input type="text" id="name" v-model="name">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email">
            <label for="date_birth">Data de nascimento</label>
            <input type="date" id="date_birth" v-model="date_birth">
            <label for="zap">WhatsApp</label>
            <input type="text" id="zap" v-model="zap">
            <label for="area">Area de atuação</label>
            <select id="area" v-model="area">
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
            </select>
            <label for="nivel">Nível</label>
            <select id="nivel" v-model="nivel">
                <option value="junior">Junior</option>
                <option value="pleno">Pleno</option>
                <option value="senior">Senior</option>
            </select>
            <p>Selecione suas habilidades</p>
            <div v-if="area === 'frontend' || area === 'fullstack'">
                <label><input type="checkbox" id="html" value="html" v-model="skills">HTML</label>
                <label><input type="checkbox" id="css" value="css" v-model="skills">CSS</label>
                <label><input type="checkbox" id="javascript" value="javascript" v-model="skills">JavaScript</label>
                <label><input type="checkbox" id="vue" value="vue" v-model="skills">Vue</label>
            </div>
            <div v-if="area === 'backend' || area === 'fullstack'">
                <label><input type="checkbox" id="node"  value="node" v-model="skills">Node</label>
                <label><input type="checkbox" id="php" value="php" v-model="skills">PHP</label>
                <label><input type="checkbox" id="laravel" value="laravel" v-model="skills">Laravel</label>
                <label><input type="checkbox" id="java" value="java" v-model="skills">Java</label>
            </div>
            <label for="carta">Carta de aprensentação</label>
            <textarea id="carta" cols="30" rows="10" v-model="carta"></textarea>

        </form>
    </section>
</template>

<script>

export default {
    data() {
        return {
            name: "",
            email: "",
            date_birth: "",
            zap: "",
            area: "",
            nivel: "",
            skills: [],
            carta: ""
        }
    },
    methods: {
        handleSubmit(){
            const schema = Yup.object().shape({
                name: Yup.string().required("o nome é obrigatório"),
                email: Yup.string().email("O email é inválido").required("O email é obrigatório")
            })
        }
    },
    watch: {
        area(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.skills = []
            }
        }
    }
}
</script>

<style>
.new-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.new-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>