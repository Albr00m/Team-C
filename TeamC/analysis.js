        // Data for the Top 10 food items and their mock order volumes (in thousands)
        const top10Data = {
            labels: [
                'Classic Burger',
                'Chicken Sandwich',
                'Fries (Lg)',
                'Milkshake',
                'Caesar Salad',
                'Taco Plate',
                'Soup of the Day',
                'Veggie Wrap',
                'Side Salad',
                'Soft Drink (Lg)',
            ],
            orders: [25, 22, 18, 15, 12, 10, 8, 6, 4, 3], // Sorted by popularity
        };

        // Get the context of the canvas element
        const ctx = document.getElementById('menuPopularityChart').getContext('2d');

        // Initialize the Chart
        new Chart(ctx, {
            type: 'bar', // Set the chart type to 'bar'
            data: {
                labels: top10Data.labels,
                datasets: [{
                    label: 'Order Volume (in Thousands)',
                    data: top10Data.orders,
                    backgroundColor: 'rgba(239, 68, 68, 0.8)', // Tailwind Red-500 for a restaurant theme
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 1,
                    borderRadius: 6,
                    hoverBackgroundColor: 'rgba(239, 68, 68, 1)',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Allows the chart to fill the container height
                plugins: {
                    legend: {
                        display: false, // We don't need a legend for a single dataset
                    },
                    title: {
                        display: true,
                        text: 'Order Volume by Item',
                        font: { size: 18, weight: 'bold' }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Orders: ${context.parsed.y.toLocaleString()}K`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Orders (in Thousands)',
                            font: { size: 14 }
                        }
                    },
                    x: {
                        grid: { display: false } // Hide X-axis grid lines for cleaner look
                    }
                }
            }
        });