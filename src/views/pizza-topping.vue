<template>
	<div class="col-lg-12 col-md-12 col-sm-12">
		<div class="card card-stats">
			<div class="card-header card-header-sucess card-header-icon">
				<div class="card-icon">
					<i class="material-icons">filter_frames</i>
				</div>
				<h3 class="card-title" style="float: left; "> <b> Pizza Topping </b> </h3>
			</div>
			<div class="row" style="margin-left: 3% ;">
				<div class="col-lg-4 col-md-12 col-sm-12">
					<div class="card" style="width: 20rem; border-style: groove; border-width: medium">
						<div class="card-header card-header-primary" style="float: right;width: 200px; height: 50px">
							<h4>
								<b>Add Pizza Toppings</b>
							</h4>
						</div>
						<div class=" card-body">
							<h4 class="card-title">Card title</h4>
							<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
							<button class="boxshadow btn btn-primary" @click="showForm('add')">Add</button>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="card" style="border-style: groove; border-width: medium;">
						<div class="card-header card-header-text card-header-primary" style="width: 200px; height: 50px ">
							<div class="card-text">
								<h4 class="card-title">
									<b> Pizza Topping List</b>
								</h4>
							</div>
						</div>
						<div class="card-body">
							<div class="col-lg-11 col-md-6 col-sm-6">
								<div class="btn-group" style="float: left;width: 500px">
									<table class="table table-borderless">
										<thead>
											<tr style="background: linear-gradient(60deg, #a529bb, #cc8ade);">
												<th style="font-size:20px; color:white">Sr</th>
												<th style="font-size:20px; color:white">Name</th>
												<th style="font-size:20px; color:white">Total</th>
												<th style="font-size:20px; color:white" class="text-right">Actions</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="(topping, index) in toppingsList" :key="topping.id">
												<td class="text-center">{{ index + 1 }}</td>
												<td>{{ topping.name }}</td>
												<td>2013</td>
												<td class="td-actions text-right">
													<button type="button" rel="tooltip" class="btn btn-success" @click="showForm('edit', topping)">
														<i class="material-icons">edit</i>
													</button>
													&nbsp;
													<button type="button" rel="tooltip" class="btn btn-danger" @click="deleteTopping(topping)">
														<i class="material-icons">close</i>
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div v-if="formVisible" id="addnewproduct" role="dialog">
					<div class="modal-dialog  " role="document">
						<form @submit.prevent="toppingAction()">
							<div class="modal-content" style="width: 500px;">
								<div class="modal-header">
									<h3 class="modal-title card-header card-header-primary" id="addnewproduct">
										{{ formTitle }}
									</h3>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="col-lg-8 col-md-6 col-sm-6" style="width: 450px;">
									<div class="modal-body">
										<div class="row">
											<div class="col-lg-6 col-md-6 col-sm-6">
												<!-- <form> -->
												<div class="form-group">
													<label style="font-size:15px; width: 260px; color: black;font-style:bold;" for="Name">Enter
														Category Name </label>
													<input type="text" style="width: 260px;color:black;  font-size:15px " id="productname"
														aria-describedby="emailHelp" placeholder=" " v-model="productName" required>
												</div>
												<!-- </form> -->
											</div>
										</div>
									</div>
								</div>
								<div class="modal-footer">
									<button type="submit" class="btn btn-primary">Submit</button>
									<button type="button" class="btn btn-danger" data-dismiss="modal"
										@click="formVisible = false">Close</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const axios = require("axios");

export default {
	name: "pizza-topping",

	data() {
		return {
			formTitle: "",
			actionType: "",
			formVisible: false,
			productName: "",
			toppingsList: [],
			toppingToBeUpdated: [],
		}
	},

	beforeMount() {
		this.getToppings();
	},

	methods: {
		showForm(formType, topping = undefined) {
			this.formVisible = true;
			if (formType == "add") {
				this.formTitle = "Add Pizza Toppings";
				this.actionType = formType;
				this.productName = "";
			} else {
				this.formTitle = "Update Pizza Toppings";
				this.actionType = formType;
				this.productName = topping.name;
				this.toppingToBeUpdated = topping;
			}
		},

		getToppings() {
			axios.get(process.env.VUE_APP_BACKEND_ADDRESS + "getAllToppings").then(toppings => {
				this.toppingsList = toppings.data;
				console.log(this.toppingsList);
			})
		},

		toppingAction() {
			this.actionType == "add" ? this.addTopping() : this.updateTopping()
		},

		addTopping() {
			axios.post(process.env.VUE_APP_BACKEND_ADDRESS + "addTopping", { name: this.productName }).then(() => {
				alert("Topping created successfully!");
			});

		},

		updateTopping() {
			axios.put(process.env.VUE_APP_BACKEND_ADDRESS + "updateTopping/" + this.toppingToBeUpdated.id,
				{ name: this.productName }).then(() => {
					alert("Topping updated successfully!");
					this.getToppings();
				});
		},

		deleteTopping(toppingToBeDeleted) {
			axios.delete(process.env.VUE_APP_BACKEND_ADDRESS + "deleteTopping/" + toppingToBeDeleted.id).then(() => {
					alert("Topping deleted successfully!");
					this.getToppings();
				});
		},
	}
}
</script>
