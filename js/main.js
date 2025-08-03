// Global variables and configuration
const CONFIG = {
    API_BASE_URL: 'https://api.codemarket.dev',
    TYPING_SPEED: 50,
    ANIMATION_DELAY: 100,
    LEADERBOARD_UPDATE_INTERVAL: 30000,
};

// Sample data for challenges
const challengesData = [
    {
        id: 1,
        title: "Binary Tree Maximum Path Sum",
        description: "Given a non-empty binary tree, find the maximum path sum. The path may start and end at any node in the tree.",
        difficulty: "hard",
        category: "algorithms",
        reward: 250,
        tags: ["tree", "recursion", "dynamic-programming"],
        attempts: 1247,
        success_rate: 28.5,
        template: {
            javascript: `function maxPathSum(root) {
    // Your code here
    return 0;
}`,
            python: `def max_path_sum(root):
    # Your code here
    return 0`,
            cpp: `int maxPathSum(TreeNode* root) {
    // Your code here
    return 0;
}`,
            java: `public int maxPathSum(TreeNode root) {
    // Your code here
    return 0;
}`
        }
    },
    {
        id: 2,
        title: "Cryptocurrency Trading Algorithm",
        description: "Design an algorithm to maximize profit from buying and selling cryptocurrency with transaction fees.",
        difficulty: "hard",
        category: "algorithms",
        reward: 300,
        tags: ["dynamic-programming", "optimization", "finance"],
        attempts: 892,
        success_rate: 15.2
    },
    {
        id: 3,
        title: "Neural Network Backpropagation",
        description: "Implement backpropagation algorithm for a multi-layer neural network from scratch.",
        difficulty: "hard",
        category: "machine-learning",
        reward: 400,
        tags: ["neural-networks", "calculus", "optimization"],
        attempts: 456,
        success_rate: 12.8
    },
    {
        id: 4,
        title: "Distributed Hash Table",
        description: "Build a distributed hash table with consistent hashing and fault tolerance.",
        difficulty: "hard",
        category: "data-structures",
        reward: 350,
        tags: ["distributed-systems", "hashing", "networking"],
        attempts: 234,
        success_rate: 8.9
    },
    {
        id: 5,
        title: "Blockchain Consensus Algorithm",
        description: "Implement a proof-of-stake consensus mechanism for a blockchain network.",
        difficulty: "hard",
        category: "blockchain",
        reward: 500,
        tags: ["blockchain", "consensus", "cryptography"],
        attempts: 156,
        success_rate: 6.4
    },
    {
        id: 6,
        title: "Real-time Graph Algorithms",
        description: "Find shortest paths in a dynamic graph that changes in real-time.",
        difficulty: "medium",
        category: "algorithms",
        reward: 180,
        tags: ["graphs", "dynamic", "shortest-path"],
        attempts: 567,
        success_rate: 35.7
    }
];

// Sample data for marketplace
const marketplaceData = [
    {
        id: 1,
        title: "Advanced Sorting Algorithms Collection",
        description: "Complete implementation of advanced sorting algorithms including TimSort, IntroSort, and parallel sorting.",
        price: 45,
        category: "algorithms",
        rating: 4.8,
        reviews: 127,
        tags: ["sorting", "performance", "parallel"],
        author: "AlgoMaster",
        sales: 1250,
        icon: "fas fa-sort"
    },
    {
        id: 2,
        title: "Machine Learning Toolkit",
        description: "Production-ready ML algorithms with optimized implementations and comprehensive documentation.",
        price: 120,
        category: "libraries",
        rating: 4.9,
        reviews: 89,
        tags: ["machine-learning", "python", "optimization"],
        author: "MLExpert",
        sales: 450,
        icon: "fas fa-brain"
    },
    {
        id: 3,
        title: "Cryptocurrency Historical Dataset",
        description: "5 years of high-frequency trading data for top 100 cryptocurrencies with technical indicators.",
        price: 85,
        category: "datasets",
        rating: 4.7,
        reviews: 203,
        tags: ["cryptocurrency", "trading", "finance"],
        author: "CryptoData",
        sales: 780,
        icon: "fas fa-coins"
    },
    {
        id: 4,
        title: "Distributed Systems Templates",
        description: "Battle-tested templates for microservices, load balancers, and distributed computing patterns.",
        price: 65,
        category: "templates",
        rating: 4.6,
        reviews: 156,
        tags: ["microservices", "scalability", "architecture"],
        author: "SystemsGuru",
        sales: 320,
        icon: "fas fa-network-wired"
    },
    {
        id: 5,
        title: "Advanced Data Structures Course",
        description: "Interactive tutorials covering segment trees, persistent data structures, and advanced graph algorithms.",
        price: 0,
        category: "tutorials",
        rating: 4.9,
        reviews: 1247,
        tags: ["data-structures", "algorithms", "interactive"],
        author: "EduTech",
        sales: 5670,
        icon: "fas fa-graduation-cap"
    },
    {
        id: 6,
        title: "Blockchain Smart Contracts Library",
        description: "Secure and gas-optimized smart contract templates for DeFi, NFTs, and governance.",
        price: 150,
        category: "libraries",
        rating: 4.8,
        reviews: 67,
        tags: ["blockchain", "solidity", "defi"],
        author: "BlockchainDev",
        sales: 180,
        icon: "fas fa-link"
    }
];

// Sample leaderboard data
const leaderboardData = [
    { rank: 1, username: "CodeNinja", avatar: "CN", challenges: 47, earnings: 12450, rating: 2890 },
    { rank: 2, username: "AlgorithmAce", avatar: "AA", challenges: 42, earnings: 11200, rating: 2785 },
    { rank: 3, username: "DataMaster", avatar: "DM", challenges: 38, earnings: 9800, rating: 2650 },
    { rank: 4, username: "MLWizard", avatar: "MW", challenges: 35, earnings: 8750, rating: 2520 },
    { rank: 5, username: "CryptoSolver", avatar: "CS", challenges: 32, earnings: 7900, rating: 2410 },
    { rank: 6, username: "GraphGuru", avatar: "GG", challenges: 29, earnings: 7200, rating: 2350 },
    { rank: 7, username: "SystemsExpert", avatar: "SE", challenges: 28, earnings: 6800, rating: 2280 },
    { rank: 8, username: "OptimizationPro", avatar: "OP", challenges: 26, earnings: 6300, rating: 2190 },
    { rank: 9, username: "AIResearcher", avatar: "AR", challenges: 24, earnings: 5850, rating: 2120 },
    { rank: 10, username: "DistributedDev", avatar: "DD", challenges: 22, earnings: 5400, rating: 2050 }
];

// Code typing animation
const codeSnippets = [
    `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}`,
    `class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}`,
    `const quickSort = arr => {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}`,
    `async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}`
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTypingAnimation();
    initializeChallenges();
    initializeMarketplace();
    initializeLeaderboard();
    initializeCodeEditor();
    initializeScrollAnimations();
    initializeGrowthChart();
    initializeMobileMenu();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Typing animation
function initializeTypingAnimation() {
    const typingElement = document.getElementById('typing-code');
    if (!typingElement) return;
    
    let currentSnippet = 0;
    
    function typeCode() {
        const code = codeSnippets[currentSnippet];
        let i = 0;
        typingElement.textContent = '';
        
        function typeChar() {
            if (i < code.length) {
                typingElement.textContent += code.charAt(i);
                i++;
                setTimeout(typeChar, CONFIG.TYPING_SPEED);
            } else {
                setTimeout(() => {
                    currentSnippet = (currentSnippet + 1) % codeSnippets.length;
                    typeCode();
                }, 2000);
            }
        }
        
        typeChar();
    }
    
    typeCode();
}

// Challenges functionality
function initializeChallenges() {
    renderChallenges();
    setupChallengeFilters();
}

function renderChallenges(filter = 'all') {
    const challengesGrid = document.getElementById('challenges-grid');
    if (!challengesGrid) return;
    
    const filteredChallenges = filter === 'all' 
        ? challengesData 
        : challengesData.filter(challenge => challenge.category === filter);
    
    challengesGrid.innerHTML = filteredChallenges.map(challenge => 
        createChallengeCard(challenge)
    ).join('');
    
    // Add click events to challenge cards
    challengesGrid.querySelectorAll('.challenge-card').forEach(card => {
        card.addEventListener('click', () => {
            const challengeId = card.dataset.challengeId;
            loadChallenge(challengeId);
        });
    });
}

function createChallengeCard(challenge) {
    const difficultyColor = {
        easy: 'easy',
        medium: 'medium',
        hard: 'hard'
    }[challenge.difficulty];
    
    return `
        <div class="challenge-card fade-in-up" data-challenge-id="${challenge.id}">
            <div class="challenge-header">
                <div>
                    <h3 class="challenge-title">${challenge.title}</h3>
                    <p class="challenge-description">${challenge.description}</p>
                </div>
                <span class="difficulty-badge ${difficultyColor}">${challenge.difficulty}</span>
            </div>
            <div class="challenge-meta">
                <span class="reward">$${challenge.reward}</span>
                <span class="attempts">${challenge.attempts} attempts</span>
                <span class="success-rate">${challenge.success_rate}% success</span>
            </div>
            <div class="challenge-tags">
                ${challenge.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

function setupChallengeFilters() {
    const filterButtons = document.querySelectorAll('.challenge-filters .filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter challenges
            const filter = button.dataset.filter;
            renderChallenges(filter);
        });
    });
}

function loadChallenge(challengeId) {
    const challenge = challengesData.find(c => c.id == challengeId);
    if (!challenge) return;
    
    // Update current challenge display
    document.getElementById('current-challenge-title').textContent = challenge.title;
    document.getElementById('current-challenge-desc').textContent = challenge.description;
    
    // Update code template
    const languageSelect = document.getElementById('language-select');
    const codeInput = document.getElementById('code-input');
    
    if (challenge.template && challenge.template[languageSelect.value]) {
        codeInput.value = challenge.template[languageSelect.value];
    }
    
    // Scroll to live challenge
    document.querySelector('.live-challenge').scrollIntoView({ behavior: 'smooth' });
}

// Marketplace functionality
function initializeMarketplace() {
    renderMarketplace();
    setupMarketplaceFilters();
}

function renderMarketplace(items = marketplaceData) {
    const marketplaceGrid = document.getElementById('marketplace-grid');
    if (!marketplaceGrid) return;
    
    marketplaceGrid.innerHTML = items.map(item => 
        createMarketplaceItem(item)
    ).join('');
}

function createMarketplaceItem(item) {
    const price = item.price === 0 ? 'Free' : `$${item.price}`;
    const stars = '★'.repeat(Math.floor(item.rating)) + '☆'.repeat(5 - Math.floor(item.rating));
    
    return `
        <div class="marketplace-item fade-in-up">
            <div class="item-image">
                <i class="${item.icon}"></i>
            </div>
            <div class="item-content">
                <h3 class="item-title">${item.title}</h3>
                <p class="item-description">${item.description}</p>
                <div class="item-meta">
                    <span class="item-price">${price}</span>
                    <div class="item-rating">
                        <span class="stars">${stars}</span>
                        <span class="rating-value">${item.rating}</span>
                        <span class="reviews">(${item.reviews})</span>
                    </div>
                </div>
                <div class="item-tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="item-footer">
                    <span class="author">by ${item.author}</span>
                    <button class="btn btn-primary">
                        ${item.price === 0 ? 'Download' : 'Purchase'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function setupMarketplaceFilters() {
    const searchInput = document.getElementById('market-search');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    
    function filterMarketplace() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const selectedPriceRange = priceFilter.value;
        
        let filteredItems = marketplaceData;
        
        // Filter by search term
        if (searchTerm) {
            filteredItems = filteredItems.filter(item => 
                item.title.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }
        
        // Filter by category
        if (selectedCategory !== 'all') {
            filteredItems = filteredItems.filter(item => item.category === selectedCategory);
        }
        
        // Filter by price range
        if (selectedPriceRange !== 'all') {
            filteredItems = filteredItems.filter(item => {
                switch (selectedPriceRange) {
                    case 'free': return item.price === 0;
                    case '0-50': return item.price > 0 && item.price <= 50;
                    case '50-200': return item.price > 50 && item.price <= 200;
                    case '200+': return item.price > 200;
                    default: return true;
                }
            });
        }
        
        renderMarketplace(filteredItems);
    }
    
    searchInput?.addEventListener('input', filterMarketplace);
    categoryFilter?.addEventListener('change', filterMarketplace);
    priceFilter?.addEventListener('change', filterMarketplace);
}

// Leaderboard functionality
function initializeLeaderboard() {
    renderLeaderboard();
    setupLeaderboardFilters();
    
    // Update leaderboard periodically
    setInterval(updateLeaderboard, CONFIG.LEADERBOARD_UPDATE_INTERVAL);
}

function renderLeaderboard(data = leaderboardData) {
    const leaderboardBody = document.getElementById('leaderboard-body');
    if (!leaderboardBody) return;
    
    leaderboardBody.innerHTML = data.map(user => 
        createLeaderboardRow(user)
    ).join('');
}

function createLeaderboardRow(user) {
    const rankClass = user.rank <= 3 ? `rank-${user.rank}` : '';
    
    return `
        <div class="table-row">
            <div class="rank">
                <span class="rank-badge ${rankClass}">#${user.rank}</span>
            </div>
            <div class="user">
                <div class="user-info">
                    <div class="user-avatar">${user.avatar}</div>
                    <span class="user-name">${user.username}</span>
                </div>
            </div>
            <div class="challenges">${user.challenges}</div>
            <div class="earnings">$${user.earnings.toLocaleString()}</div>
            <div class="rating">${user.rating}</div>
        </div>
    `;
}

function setupLeaderboardFilters() {
    const filterButtons = document.querySelectorAll('.leaderboard-filters .filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // In a real app, this would fetch different data based on the period
            const period = button.dataset.period;
            renderLeaderboard(getLeaderboardData(period));
        });
    });
}

function getLeaderboardData(period) {
    // Simulate different data for different periods
    const multiplier = { week: 0.3, month: 0.7, all: 1 }[period] || 1;
    
    return leaderboardData.map(user => ({
        ...user,
        challenges: Math.floor(user.challenges * multiplier),
        earnings: Math.floor(user.earnings * multiplier)
    }));
}

function updateLeaderboard() {
    // Simulate real-time updates by slightly modifying the data
    const updatedData = leaderboardData.map(user => ({
        ...user,
        challenges: user.challenges + Math.floor(Math.random() * 2),
        earnings: user.earnings + Math.floor(Math.random() * 100)
    }));
    
    renderLeaderboard(updatedData);
}

// Code Editor functionality
function initializeCodeEditor() {
    const languageSelect = document.getElementById('language-select');
    const codeInput = document.getElementById('code-input');
    
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            updateCodeTemplate(selectedLanguage);
        });
    }
    
    // Add syntax highlighting (basic)
    if (codeInput) {
        codeInput.addEventListener('input', function() {
            // Basic syntax highlighting could be implemented here
            // For now, we'll just handle tab insertion
        });
        
        codeInput.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = this.selectionStart;
                const end = this.selectionEnd;
                this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
                this.selectionStart = this.selectionEnd = start + 4;
            }
        });
    }
}

function updateCodeTemplate(language) {
    const codeInput = document.getElementById('code-input');
    const templates = {
        javascript: `function solution() {
    // Write your JavaScript solution here
    return null;
}`,
        python: `def solution():
    # Write your Python solution here
    return None`,
        cpp: `#include <iostream>
#include <vector>
using namespace std;

int solution() {
    // Write your C++ solution here
    return 0;
}`,
        java: `public class Solution {
    public int solution() {
        // Write your Java solution here
        return 0;
    }
}`
    };
    
    if (codeInput && templates[language]) {
        codeInput.value = templates[language];
    }
}

function runCode() {
    const codeInput = document.getElementById('code-input');
    const outputSection = document.getElementById('output-section');
    const codeOutput = document.getElementById('code-output');
    
    if (!codeInput || !outputSection || !codeOutput) return;
    
    // Show loading state
    outputSection.style.display = 'block';
    codeOutput.textContent = 'Running code...';
    
    // Simulate code execution
    setTimeout(() => {
        const sampleOutputs = [
            'Test case 1: PASSED\nTest case 2: PASSED\nTest case 3: FAILED\nExpected: 42, Got: 24',
            'All test cases passed!\nExecution time: 0.045s\nMemory usage: 12.3MB',
            'Compilation error: Missing semicolon on line 5',
            'Runtime error: Index out of bounds\nLine 8: array[n+1]',
            'Time limit exceeded\nOptimize your algorithm for better performance'
        ];
        
        const randomOutput = sampleOutputs[Math.floor(Math.random() * sampleOutputs.length)];
        codeOutput.textContent = randomOutput;
    }, 1500);
}

function submitSolution() {
    const codeInput = document.getElementById('code-input');
    if (!codeInput || !codeInput.value.trim()) {
        alert('Please write some code before submitting!');
        return;
    }
    
    // Simulate submission
    const isSuccess = Math.random() > 0.3; // 70% success rate
    
    if (isSuccess) {
        alert('🎉 Congratulations! Your solution passed all test cases.\nYou earned $250 and 50 XP points!');
    } else {
        alert('❌ Your solution failed some test cases.\nKeep trying - you\'re getting close!');
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.feature-card, .challenge-card, .marketplace-item').forEach(el => {
        observer.observe(el);
    });
}

// Growth chart
function initializeGrowthChart() {
    const canvas = document.getElementById('growthChart');
    if (!canvas || typeof Chart === 'undefined') return;
    
    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Active Users',
                    data: [1200, 1900, 3000, 5000, 7500, 10000],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Challenges Completed',
                    data: [800, 1400, 2200, 3500, 5200, 7800],
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#a1a1aa'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#71717a'
                    },
                    grid: {
                        color: 'rgba(113, 113, 122, 0.2)'
                    }
                },
                y: {
                    ticks: {
                        color: '#71717a'
                    },
                    grid: {
                        color: 'rgba(113, 113, 122, 0.2)'
                    }
                }
            }
        }
    });
}

// Mobile menu
function initializeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
        
        // Close menu when clicking on a link
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
    }
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Advanced challenge validation system
class ChallengeValidator {
    constructor() {
        this.testCases = new Map();
        this.setupTestCases();
    }
    
    setupTestCases() {
        // Binary Tree Maximum Path Sum test cases
        this.testCases.set(1, [
            { input: [1, 2, 3], expected: 6 },
            { input: [-10, 9, 20, null, null, 15, 7], expected: 42 },
            { input: [-3], expected: -3 }
        ]);
    }
    
    validateSolution(challengeId, code, language) {
        const testCases = this.testCases.get(challengeId);
        if (!testCases) return { success: false, error: 'No test cases found' };
        
        try {
            // In a real implementation, this would execute the code safely
            // For demo purposes, we'll simulate validation
            const results = testCases.map((testCase, index) => {
                const passed = Math.random() > 0.2; // 80% pass rate for demo
                return {
                    index: index + 1,
                    passed,
                    input: testCase.input,
                    expected: testCase.expected,
                    actual: passed ? testCase.expected : 'incorrect result'
                };
            });
            
            const allPassed = results.every(r => r.passed);
            
            return {
                success: allPassed,
                results,
                executionTime: (Math.random() * 1000).toFixed(0) + 'ms',
                memoryUsage: (Math.random() * 50 + 10).toFixed(1) + 'MB'
            };
        } catch (error) {
            return {
                success: false,
                error: 'Runtime error: ' + error.message
            };
        }
    }
}

// Initialize challenge validator
const challengeValidator = new ChallengeValidator();

// Enhanced submit solution function
function submitSolution() {
    const codeInput = document.getElementById('code-input');
    const languageSelect = document.getElementById('language-select');
    const outputSection = document.getElementById('output-section');
    const codeOutput = document.getElementById('code-output');
    
    if (!codeInput?.value.trim()) {
        alert('Please write some code before submitting!');
        return;
    }
    
    // Show loading state
    outputSection.style.display = 'block';
    codeOutput.textContent = 'Validating solution...';
    
    // Get current challenge ID (for demo, we'll use challenge 1)
    const currentChallengeId = 1;
    
    setTimeout(() => {
        const result = challengeValidator.validateSolution(
            currentChallengeId,
            codeInput.value,
            languageSelect.value
        );
        
        if (result.success) {
            codeOutput.innerHTML = `
<span style="color: #10b981;">✅ All test cases passed!</span>
Execution time: ${result.executionTime}
Memory usage: ${result.memoryUsage}

🎉 Congratulations! You earned $250 and 50 XP points!
            `;
        } else if (result.results) {
            const failedTests = result.results.filter(r => !r.passed);
            codeOutput.innerHTML = `
<span style="color: #ef4444;">❌ ${failedTests.length} test case(s) failed</span>

${result.results.map(r => 
    `Test ${r.index}: ${r.passed ? '✅ PASSED' : '❌ FAILED'}
    ${!r.passed ? `Expected: ${r.expected}, Got: ${r.actual}` : ''}`
).join('\n')}

Execution time: ${result.executionTime}
Memory usage: ${result.memoryUsage}
            `;
        } else {
            codeOutput.innerHTML = `<span style="color: #ef4444;">❌ ${result.error}</span>`;
        }
    }, 2000);
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.runCode = runCode;
window.submitSolution = submitSolution;