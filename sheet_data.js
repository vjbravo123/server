 const data = [
    { sno: 1, year: 'II', roll_no: '21/509', name: 'Abhay Saraswat' },
    { sno: 2, year: 'II', roll_no: '21/532', name: 'Abhinav Suresh' },
    { sno: 3, year: 'II', roll_no: '21/512', name: 'ABHINAV SYAM' },
    { sno: 4, year: 'II', roll_no: '21/505', name: 'ABHINEET SETH' },
    { sno: 5, year: 'II', roll_no: '21/495', name: 'Abhishek sharma' },
    { sno: 6, year: 'II', roll_no: '21/490', name: 'Abhishek Rana' },
    { sno: 7, year: 'II', roll_no: '21/520', name: 'Aman Soni' },
    { sno: 8, year: 'II', roll_no: '21/494', name: 'ANASH MALIK' },
    { sno: 10, year: 'II', roll_no: '21/513', name: 'ANSHUL' },
    { sno: 11, year: 'II', roll_no: '21/531', name: 'Anurag pratap singh' },
    { sno: 12, year: 'II', roll_no: '21/510', name: 'Aryan' },
    { sno: 13, year: 'II', roll_no: '21/498', name: 'Ashutosh Sharma' },
    { sno: 14, year: 'II', roll_no: '21/502', name: 'ASTITWA DWIVEDI' },
    { sno: 15, year: 'II', roll_no: '21/491', name: 'Avik Choudhary' },
    { sno: 16, year: 'II', roll_no: '21/516', name: 'AVINASH KUMAR' },
    { sno: 17, year: 'II', roll_no: '21/466', name: 'AYUSHI' },
    { sno: 18, year: 'II', roll_no: '21/465', name: 'BHARTI' },
    { sno: 19, year: 'II', roll_no: '21/501', name: 'Deepak Singh' },
    { sno: 20, year: 'II', roll_no: '21/514', name: 'DEEPANSHU YADAV' },
    { sno: 21, year: 'II', roll_no: '21/496', name: 'Devansh Chauhan' },
    { sno: 22, year: 'II', roll_no: '21/479', name: 'Dhananjay' },
    { sno: 23, year: 'II', roll_no: '21/483', name: 'DHEERAJ KUMAR' },
    { sno: 24, year: 'II', roll_no: '21/467', name: 'DIKSHA' },
    { sno: 25, year: 'II', roll_no: '21/464', name: 'DIKSHA' },
    { sno: 26, year: 'II', roll_no: '21/541', name: 'Divyam' },
    { sno: 27, year: 'II', roll_no: '21/499', name: 'DIVYANSHU KUMAR DUBEY'},
    { sno: 28, year: 'II', roll_no: '21/511', name: 'GITIK Chauhan' },
    { sno: 29, year: 'II', roll_no: '21/528', name: 'Gulshan kumar' },
    { sno: 30, year: 'II', roll_no: '21/484', name: 'Harish Kumar' },
    { sno: 31, year: 'II', roll_no: '21/471', name: 'HARISH SAINI' },
    { sno: 32, year: 'II', roll_no: '21/493', name: 'HARSH YADAV' },
    { sno: 33, year: 'II', roll_no: '21/536', name: 'HARSH YADAV' },
    { sno: 34, year: 'II', roll_no: '21/540', name: 'Himanshu Jain' },
    { sno: 35, year: 'II', roll_no: '21/468', name: 'Himanshu Verma' },
    { sno: 36, year: 'II', roll_no: '21/478', name: 'Jatin kumar' },
    { sno: 37, year: 'II', roll_no: '21/522', name: 'JATIN MALIK' },
    { sno: 38, year: 'II', roll_no: '21/460', name: 'JATIN NEHRA' },
    { sno: 39, year: 'II', roll_no: '21/519', name: 'JATIN SHARMA' },
    { sno: 40, year: 'II', roll_no: '21/515', name: 'JAYANT BHAMBU' },
    { sno: 41, year: 'II', roll_no: '21/1', name: 'JIVANSHI' },
    { sno: 42, year: 'II', roll_no: '21/457', name: 'KAJAL TOMER' },
    { sno: 43, year: 'II', roll_no: '21/474', name: 'KANAN' },
    { sno: 44, year: 'II', roll_no: '21/539', name: 'KUSHAGRA TIWARI' },
    { sno: 45, year: 'II', roll_no: '21/527', name: 'Kusum Kumari' },
    { sno: 46, year: 'II', roll_no: '21/524', name: 'MANISHANKAR YADAV' },
    { sno: 47, year: 'II', roll_no: '21/482', name: 'MOHIT YADAV' },
    { sno: 48, year: 'II', roll_no: '21/476', name: 'NEERAJ' },
    { sno: 49, year: 'II', roll_no: '21/461', name: 'NEHA BHAGAT' },
    { sno: 50, year: 'II', roll_no: '21/456', name: 'NIDHI' },
    { sno: 51, year: 'II', roll_no: '21/538', name: 'Nikhil Singh' },
    { sno: 52, year: 'II', roll_no: '21/506', name: 'NIKITA' },
    { sno: 53, year: 'II', roll_no: '21/477', name: 'NISHANK TIWARY' },
    { sno: 54, year: 'II', roll_no: '21/485', name: 'PARTH GUPTA' },
    { sno: 55, year: 'II', roll_no: '21/458', name: 'PAWAN KUMAR BHAMBHU'},
    { sno: 56, year: 'II', roll_no: '21/517', name: 'Piyush Singh Chauhan'},
    { sno: 57, year: 'II', roll_no: '21/475', name: 'PRASHANT SINGH' },
    { sno: 58, year: 'II', roll_no: '21/500', name: 'PRAVEEN' },
    { sno: 59, year: 'II', roll_no: '21/507', name: 'PREET YADAV' },
    { sno: 60, year: 'II', roll_no: '21/462', name: 'PRIYA' },
    { sno: 61, year: 'II', roll_no: '21/535', name: 'RAHUL BHATIA' },
    { sno: 62, year: 'II', roll_no: '21/533', name: 'Rajat' },
    { sno: 63, year: 'II', roll_no: '21/508', name: 'RAJAT BAHUGUNA' },
    { sno: 64, year: 'II', roll_no: '21/481', name: 'Raman Sharma' },
    { sno: 65, year: 'II', roll_no: '21/497', name: 'RITIK BALIYAN' },
    { sno: 66, year: 'II', roll_no: '21/459', name: 'Ritu' },
    { sno: 67, year: 'II', roll_no: '21/542', name: 'SACHIN KAIM' },
    { sno: 68, year: 'II', roll_no: '21/537', name: 'sagar' },
    { sno: 69, year: 'II', roll_no: '21/523', name: 'Sanjay Singh' },
    { sno: 70, year: 'II', roll_no: '21/504', name: 'SANSKRITI SINGH' },
    { sno: 71, year: 'II', roll_no: '21/530', name: 'SAURABH AHIRWAR' },
    { sno: 72, year: 'II', roll_no: '21/534', name: 'Shantanu Joshi' },
    { sno: 73, year: 'II', roll_no: '21/525', name: 'Shivani Sahu' },
    { sno: 74, year: 'II', roll_no: '21/487', name: 'Shudhanshu Pal' },
    { sno: 75, year: 'II', roll_no: '21/486', name: 'Sonam Dobriyal ' },
    { sno: 76, year: 'II', roll_no: '21/470', name: 'Sumit Chandra' },
    { sno: 77, year: 'II', roll_no: '21/469', name: 'Swapnil Tiwari' },
    { sno: 78, year: 'II', roll_no: '21/1015', name: 'VIPUL' },
    { sno: 79, year: 'II', roll_no: '21/480', name: 'Vishesh Kumar' },
    { sno: 80, year: 'II', roll_no: '21/489', name: 'VIVEK JOSHI' },
    { sno: 81, year: 'II', roll_no: '21/473', name: 'VIVEK KUMAR RAI' },
    { sno: 82, year: 'II', roll_no: '21/455', name: 'Vivek Saini' },
    { sno: 83, year: 'II', roll_no: '21/488', name: 'Yogda' },
    { sno: 84, year: 'II', roll_no: '21/492', name: 'YOGESH' },
    { sno: 85, year: 'II', roll_no: '21/529', name: 'YOGESH' }
  ]
  
  module.exports = data;