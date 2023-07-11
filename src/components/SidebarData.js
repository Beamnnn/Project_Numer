import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
/*ไอคอน*/
export const SidebarData = [
  {
    title: 'Root of Equation',
    path: '/Root_of_Equation',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Bisection Method',
        path: '/Root_of_Equation/Bisection_Method',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'False Position Method',
        path: '/Root_of_Equation/False_Position_Method',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'One-Point Iteration Method',
        path: '/Root_of_Equation/One_Point_Iteration_Method',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Newton-Raphson Method',
        path: '/Root_of_Equation/newton',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Secant Method',
        path: '/Root_of_Equation/Secant_Method',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Graphical',
        path: '/Root_of_Equation/graphical',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'sum',
        path: '/Root_of_Equation/sum',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'num',
        path: '/Root_of_Equation/num',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  
  // {
  //   title: 'Linear lgebraic',
  //   path: '/Linear_Algebraic',
  //   icon: <IoIcons.IoIosPaper />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Cramer Rule',
  //       path: '/Linear_Algebraic/Cramer_Rule',
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: 'sub-nav'
  //     },
  //     {
  //       title: 'Gauss Elimination Method ',
  //       path: '/Linear_Algebraic/Gauss_Elimination_Method',
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: 'sub-nav'
  //     },
  //     {
  //       title: 'Gauss Jordan Method',
  //       path: '/Linear_Algebraic/Gauss_Jordan_Method',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Matrix Inversion Method',
  //       path: '/Linear_Algebraic/Matrix_Inversion_Method',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'LU Decomposition Method',
  //       path: '/Linear_Algebraic/LU_Decomposition_Method',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Jacobi Iteration Method',
  //       path: '/Linear_Algebraic/Jacobi_Iteration_Method',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Gauss Seidel Iteration_Method',
  //       path: '/Linear_Algebraic/Gauss_Seidel_Iteration_Method',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Conjugate Gradient Method',
  //       path: '/Linear_Algebraic/Conjugate_Gradient_Method',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },


  // {
  //   title: 'Interpolation And Extrapolation',
  //   path: '/Interpolation_And_Extrapolation',
  //   icon: <IoIcons.IoIosPaper/>,

  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Newton Divided-Differences',
  //       path: '/Interpolation_And_Extrapolation/Newton_Divided_Differences',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Lagrange Polynomials',
  //       path: '/Interpolation_And_Extrapolation/Lagrange_Polynomials',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Spline Interpolation',
  //       path: '/Interpolation_And_Extrapolation/Spline_Interpolation',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },

  
  // {
  //   title: 'Regression',
  //   path: '/Regression',
  //   icon: <IoIcons.IoIosPaper/>,

  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Polynomial Regression',
  //       path: '/Regression/Polynomial_Regression',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Multiple Linear Regression',
  //       path: '/Regression/Multiple_Linear_Regression',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },


  
  // {
  //   title: 'Integration Techniques',
  //   path: '/Integration_Techniques',
  //   icon: <IoIcons.IoIosPaper/>,

  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Trapezoidal Rule',
  //       path: '/Integration_Techniques/Trapezoidal_Rule',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Composite Trapezoidal Rule',
  //       path: '/Integration_Techniques/Composite_Trapezoidal_Rule',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Simpson Rule',
  //       path: '/Integration_Techniques/Simpson_Rule',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Composite Simpson Rule',
  //       path: '/Integration_Techniques/Composite_Simpson_Rule',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },


  // {
  //   title: 'Numerical Differentiation',
  //   path: '/Numerical_Differentiation',
  //   icon: <IoIcons.IoIosPaper />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Forward Divided Differentiation_(h)',
  //       path: '/Numerical_Differentiation/Forward_Divided_Differentiation_h',
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: 'sub-nav'
  //     },
  //     {
  //       title: 'Forward Divided Differentiation(h^2)',
  //       path: '/Numerical_Differentiation/Forward_Divided_Differentiation_h2',
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: 'sub-nav'
  //     },
  //     {
  //       title: 'Backward Divided Differentiation',
  //       path: '/Numerical_Differentiation/Backward_Divided_Differentiation_h',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Backward Divided Differentiation(h^2)',
  //       path: '/Numerical_Differentiation/Backward_Divided_Differentiation_h2',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Central Divided Differentiation(h)',
  //       path: '/Numerical_Differentiation/Central_Divided_Differentiation_h',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Central Divided Differentiation(h^2)',
  //       path: '/Numerical_Differentiation/Central_Divided_Differentiation_h2',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //   ]
  // },

  
  // {
  //   title: 'Ordinary Differential Equation',
  //   path: '/Ordinary_Differential_Equation',
  //   icon: <IoIcons.IoIosPaper />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Euler method',
  //       path: '/Ordinary_Differential_Equation/Euler_method',
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: 'sub-nav'
  //     },
  //     {
  //       title: 'Heun method',
  //       path: '/Ordinary_Differential_Equation/Heun_method',
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: 'sub-nav'
  //     },
  //     {
  //       title: 'Modified Euler Method',
  //       path: '/Ordinary_Differential_Equation/Modified_Euler_Method',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //   ]
  // },

 

  
];
