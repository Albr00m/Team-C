        // --- 1. KPI Data and Rendering ---

        const financialData = {
            dailyRevenue: 1250.00,
            dailyExpenses: 450.00,
            yearlyRevenue: 380000.00,
            yearlyExpenses: 125000.00
        };

        // Function to format currency
        const formatCurrency = (amount) => 
            new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

        // Render KPI data to the DOM
        document.getElementById('kpi-daily-revenue').textContent = formatCurrency(financialData.dailyRevenue);
        document.getElementById('kpi-daily-expenses').textContent = formatCurrency(financialData.dailyExpenses);
        document.getElementById('kpi-yearly-revenue').textContent = formatCurrency(financialData.yearlyRevenue);
        document.getElementById('kpi-yearly-expenses').textContent = formatCurrency(financialData.yearlyExpenses);


        // --- 2. Chart Data and Configuration (Weekly Summary) ---

        const weeklyData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            revenue: [1250, 1320, 1100, 1450, 1900, 2500, 1500],
            expenses: [450, 480, 410, 500, 650, 800, 520],
        };

        const ctx = document.getElementById('weeklySummaryChart').getContext('2d');

        new Chart(ctx, {
            type: 'bar', // A bar chart is great for comparison
            data: {
                labels: weeklyData.labels,
                datasets: [
                    {
                        label: 'Revenue',
                        data: weeklyData.revenue,
                        backgroundColor: 'rgba(52, 211, 153, 0.8)', // Tailwind Green-400
                        borderColor: 'rgba(52, 211, 153, 1)',
                        borderWidth: 1,
                        borderRadius: 4,
                    },
                    {
                        label: 'Expenses',
                        data: weeklyData.expenses,
                        backgroundColor: 'rgba(248, 113, 113, 0.8)', // Tailwind Red-400
                        borderColor: 'rgba(248, 113, 113, 1)',
                        borderWidth: 1,
                        borderRadius: 4,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Amount ($)',
                        }
                    },
                    x: {
                        grid: { display: false } // Hide X-axis grid lines
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += formatCurrency(context.parsed.y);
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
