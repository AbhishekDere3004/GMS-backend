// const mongoose = require("mongoose");

// //Define the schema
// const fundingOpportunitySchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     }
// });

// //export the model
// module.exports = mongoose.model("fundingopportunity", fundingOpportunitySchema);





const mongoose = require("mongoose");

//Define the schema
const fundingOpportunitySchema = new mongoose.Schema({
    Additional_Information_on_Eligibility_c:{
        type:String,
    },
    Agency_c:{
        type:String,
    },
    Agency_Name_c:{
        type:String,
    },
    ApplicationDueDate_c:{
        type:Date,
    },
    Application_Information__cc:{
        type:String,
    },
    Application_Owner__c:{
        type:String,
    },
    ArchiveDate__c:{
        type:Date,
    },
    CreatedById:{
        type:mongoose.Schema.Types.ObjectId,
    },
    Description__c:{
        type:String,
    },
    Eligibility_and_Selection__c:{
        type:String,
    },
    Eligible_Applicants__c:{
        type:String,
    },
    End_Date__c:{
        type:Date,
    },
    Funding_Opportunity_Code__c:{
        type:String,
    },
    Funding_Opportunity_Title_Image__c:{
        type:String,
    },
    Name:{
        type:String,
    },
    Grants_gov_Url__c:{
        type:String,
    },
    InternalUniqueID__c:{
        type:String,
    },
    Is_PreApplication_Available__c:{
        type:Boolean,
    },
    LastModifiedById:{
        type:mongoose.Schema.Types.ObjectId,
    },
    Meetings_and_Trainings__c:{
        type:String,
    },
    OwnerId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    Program__c:{
        type:String,
    },
    Program_Name__c:{
        type:String,
    },
    Purpose__c:{
        type:String,
    },
    Questionnaire__c:{
        type:String,
    },
    RecordTypeId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    Funded_Amount__c:{
        type:Number,
    },
    Start_Date__c:{
        type:Date,
    },
    Status__c:{
        type:String,
    },
    Total_Allocated_amount__c:{
        type:Number,
    },
    Total_Award__c:{
        type:Number,
    },
    Total_Quarter__c:{
        type:Number,
    },
    Type__c:{
        type:String,
    }
});


//export the model
// module.exports = mongoose.model("fundingopportunity", fundingOpportunitySchema);
const FundingOpportunity = mongoose.model('FundingOpportunity', fundingOpportunitySchema);
module.exports = FundingOpportunity;
