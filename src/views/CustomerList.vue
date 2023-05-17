
<template>
	<div class="col-lg-12 col-md-12 col-sm-11">
		<div class="card card-stats">
			<div class="card-header card-header-info card-header-icon">
				<div class="card-icon">
				<i class="material-icons">perm_identityney</i>
				</div>
				<h3 class="card-title" style="float: left; "> <b> Customer</b> </h3>
			</div>

			<div class="row" style="margin-left: 3% ;">
				<div>
					<div class="card" style="border-style: groove; border-width: medium;">
						<div class="card-header card-header-text card-header-primary">
							<div class="card-text">
								<h4 class="card-title">
									<b>
									Customer List
									</b>
								</h4>
							</div>
						</div>

						<div class="card-body">
							<div class="col-lg-12 col-md-5 col-sm-6">

								<div class="btn-group"  style="overflow-x:auto" >
									<table class="table table-borderless"   >
										<thead >
											<tr style="background: linear-gradient(60deg, #a529bb, #cc8ade);">
												<th style="font-size:20px; color:white">Sr</th>
												<th style="font-size:20px; color:white">Name</th>
												<th style="font-size:20px; color:white">Total</th>
												<th style="font-size:20px; color:white" class="text-right">Actions</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="text-center">1</td>
												<td>Andrew Mike</td>
												<td>2013</td>
												<td class="td-actions text-right">
													<button type="button" rel="tooltip" class="btn btn-success" @click="showForm('edit')">
														<i class="material-icons">edit</i>
													</button>
													&nbsp;
													<button type="button" rel="tooltip" class="btn btn-danger">
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


				<div   classs="col-lg-4 col-md-6 col-sm-6"  v-if="formVisible" id="addnewproduct" role="dialog">
					<div class="modal-dialog  " role="document">
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
											<form>
												<div class="form-group">

                              <label style="font-size:15px; width: 260px; color: black;font-style:bold;"
                              for="Name">Choose Categorie </label>


                            <input style="width: 260px;color:black;  font-size:15px " id="productname"
                              aria-describedby="emailHelp" placeholder=" ">
                               
                            <label style="font-size:15px; width: 260px; color: black;font-style:bold;"
                            for="Name">Enter Food Name </label>
                          <input style="width: 260px;color:black;  font-size:15px " id="productname"
                            aria-describedby="emailHelp" placeholder=" ">


                            <label style="font-size:15px; width: 260px; color: black;font-style:bold;"
                            for="Name">Enter Price </label>
                          <input style="width: 260px;color:black;  font-size:15px " id="productname"
                            aria-describedby="emailHelp" placeholder=" ">

                            <label style="font-size:15px; width: 260px; color: black;font-style:bold;"
                            for="Name">Enter Size </label>
                          <input style="width: 260px;color:black;  font-size:15px " id="productname"
                            aria-describedby="emailHelp" placeholder=" ">

                            <label style="font-size:15px; width: 260px; color: black;font-style:bold;"
                            for="Name">Enter Description Name </label>
                          <input style="width: 260px;color:black;  font-size:15px " id="productname"
                            aria-describedby="emailHelp" placeholder=" ">

                            



													
												</div>
											</form>
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
					</div>
				</div>

			</div>


		</div>
	</div>
</template>



<script>
export default {
	name: "CustomerList",

	data() {
		return {
			formTitle: "",
			actionType: "",
			formVisible: false,
		}
	},

	methods: {
		showForm(formType) {
			this.formVisible = true;
			if (formType == "add") {
				this.formTitle = "Add Customer ";
				this.actionType = formType;
			} else {
				this.formTitle = "Update Customer";
				this.actionType = formType;
			}
		}
	}
}
</script>
