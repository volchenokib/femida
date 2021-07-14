<template>
	<el-header id="header" class="header">
		<span>Название региона</span>
		<el-dropdown>
			<i class="el-icon-setting" style="margin-right: 15px"></i>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>View</el-dropdown-item>
				<el-dropdown-item>Add</el-dropdown-item>
				<el-dropdown-item>Delete</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<span>Tom</span>
	</el-header>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.header {
	font-size: 12px;
	text-align: right;
	width: 100%;
}
</style>
