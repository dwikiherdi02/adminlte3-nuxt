<template>
    <NuxtLayout name="admin">
         <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Blank Page {{ code }}</h1>
                        </div>
                        <!-- <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Blank Page</li>
                            </ol>
                        </div> -->
                    </div>
                </div>
            </section>

            <!-- Main content -->
            <section class="content">
                <!-- Default box -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Description</h3>
                    </div>
                    <div class="hold-transition card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nam reiciendis tempora vitae hic ullam at est, delectus quidem eveniet ducimus magni beatae totam sunt neque veniam ea aut dignissimos.
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </section>
            <!-- /.content -->
    </NuxtLayout>
</template>

<script setup> 
    const route    = useRoute()

    const { code } = route.params
</script>

<style scoped> </style>