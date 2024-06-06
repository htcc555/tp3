<template>
    <!-- logo和文字 -->
    <div class="header">
        <a href="#">
            <span class="company">商品管理系统</span>
        </a>

        <!--  下拉菜单-->
        <div>
            <el-dropdown @command="handleCommand">
                <!--  绑定指令,在methods里定义-->
                <span class="el-dropdown-link">
                    <!-- 您好 -->
                    <div class="demo-type">
                        <div>
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                            </el-avatar>
                        </div>
                    </div>
                </span>

            </el-dropdown>
        </div>
        <!--  下拉菜单结束-->
    </div>
</template>

<script>


export default {
    name: 'Header',
    methods: {
        handleCommand(command) {
            this.$message(`${command}`)
        },
    },
}
</script>

