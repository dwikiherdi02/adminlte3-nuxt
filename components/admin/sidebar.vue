<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <NuxtLink to="/admin/dashboard" class="brand-link">
            <img 
                src="/dist/img/AdminLTELogo.png" 
                alt="AdminLTE Logo" 
                class="brand-image img-circle elevation-3" 
                style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </NuxtLink>
        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar Menu -->
            <nav class="mt-2">
            <ul 
                class="nav nav-pills nav-sidebar flex-column" 
                data-widget="treeview" 
                role="menu" 
                data-accordion="false">
                <li class="nav-header">MENU</li>
                <li class="nav-item">
                    <NuxtLink to="/admin/dashboard" class="nav-link">
                    <!-- <NuxtLink :to="{path: '/admin/dashboard'}" class="nav-link"> -->
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p> Dashboard </p>
                    </NuxtLink>
                </li>
                <li class="nav-header">EXAMPLE</li>
                <li class="nav-item">
                    <NuxtLink to="#" class="nav-link">
                        <i class="nav-icon fas fa-circle"></i>
                        <p>
                            Blank Page Lv 1
                            <i class="right fas fa-angle-left"></i>
                        </p>

                    </NuxtLink>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <NuxtLink to="#" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>
                                    Blank Page Lv 2
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </NuxtLink>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <NuxtLink to="/admin/blank-page-2" class="nav-link">
                                        <i class="far fa-dot-circle nav-icon"></i>
                                        <p>Blank Page Lv 3</p>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                             <NuxtLink to="/admin/blank-page-1" class="nav-link">
                                 <i class="far fa-circle nav-icon"></i>
                                 <p>Blank Page Lv 2</p>
                             </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
      </aside>
</template>