const db = require("../../models");
const FundingType = db.funding_types;
const RESPONSE = require("../../constants/response");
const { StatusCode } = require("../../constants/HttpStatusCode");


exports.createDefaultFundingTypes = async () => {
  try {
    const defaultFundingTypes = [
      {
        type_name: "Aided",
        description: "Government aided programmes",
      },
      {
        type_name: "Self-Supporting",
        description: "Self financed programmes",
      },
    ];

    for (const type of defaultFundingTypes) {
      const exists = await FundingType.findOne({
        where: {
          type_name: type.type_name,
          delete_status: 0,
        },
      });

      if (!exists) {
        await FundingType.create(type);
        // console.log(`Funding Type created: ${type.type_name}`);
      }
    }
  } catch (error) {
    console.error("Error creating default Funding Types:", error);
  }
};


// ===============================================
// 1️⃣ Add New Funding Type
// ===============================================
exports.addFundingType = async (req, res) => {
  try {
    const { type_name, description } = req.body;

    if (!type_name) {
      RESPONSE.Failure.Message = "Funding type name is required.";
      return res.status(StatusCode.BAD_REQUEST.code).send(RESPONSE.Failure);
    }

    const existingType = await FundingType.findOne({
      where: { type_name, delete_status: 0 },
    });

    if (existingType) {
      RESPONSE.Failure.Message = `Funding type "${type_name}" already exists.`;
      return res.status(StatusCode.CONFLICT.code).send(RESPONSE.Failure);
    }

    const newType = await FundingType.create({ type_name, description });

    RESPONSE.Success.Message = "Funding type added successfully.";
    RESPONSE.Success.data = [{ funding_type_id: newType.funding_type_id }];
    return res.status(StatusCode.CREATED.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error adding Funding Type:", error);
    RESPONSE.Failure.Message = error.message || "Failed to add Funding Type.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 2️⃣ Get All Funding Types
// ===============================================
exports.getAllFundingTypes = async (req, res) => {
  try {
    const types = await FundingType.findAll({
      where: { delete_status: 0 },
      order: [["funding_type_id", "ASC"]],
    });

    RESPONSE.Success.Message = "Funding types fetched successfully.";
    RESPONSE.Success.data = types;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching Funding Types:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch Funding Types.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 3️⃣ Get Funding Type by ID
// ===============================================
exports.getFundingTypeById = async (req, res) => {
  try {
    const { funding_type_id } = req.params;

    const type = await FundingType.findOne({
      where: { funding_type_id, delete_status: 0 },
    });

    if (!type) {
      RESPONSE.Failure.Message = "Funding type not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    RESPONSE.Success.Message = "Funding type fetched successfully.";
    RESPONSE.Success.data = type;
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error fetching Funding Type by ID:", error);
    RESPONSE.Failure.Message = error.message || "Failed to fetch Funding Type.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 4️⃣ Update Funding Type
// ===============================================
exports.updateFundingType = async (req, res) => {
  try {
    const { funding_type_id } = req.params;
    const { type_name, description } = req.body;

    const type = await FundingType.findOne({
      where: { funding_type_id, delete_status: 0 },
    });

    if (!type) {
      RESPONSE.Failure.Message = "Funding type not found or deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await FundingType.update(
      { type_name, description },
      { where: { funding_type_id } }
    );

    RESPONSE.Success.Message = "Funding type updated successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error updating Funding Type:", error);
    RESPONSE.Failure.Message = error.message || "Failed to update Funding Type.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 5️⃣ Soft Delete Funding Type
// ===============================================
exports.deleteFundingType = async (req, res) => {
  try {
    const { funding_type_id } = req.params;

    const type = await FundingType.findOne({ where: { funding_type_id } });

    if (!type) {
      RESPONSE.Failure.Message = "Funding type not found.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    if (type.delete_status === 1) {
      RESPONSE.Failure.Message = "Funding type is already deleted.";
      return res.status(StatusCode.OK.code).send(RESPONSE.Failure);
    }

    await FundingType.update(
      { delete_status: 1, deletedAt: new Date() },
      { where: { funding_type_id } }
    );

    RESPONSE.Success.Message = "Funding type soft deleted successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error deleting Funding Type:", error);
    RESPONSE.Failure.Message = error.message || "Failed to delete Funding Type.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};

// ===============================================
// 6️⃣ Restore Funding Type
// ===============================================
exports.restoreFundingType = async (req, res) => {
  try {
    const { funding_type_id } = req.params;

    const type = await FundingType.findOne({
      where: { funding_type_id, delete_status: 1 },
    });

    if (!type) {
      RESPONSE.Failure.Message =
        "Funding type not found or not soft-deleted.";
      return res.status(StatusCode.NOT_FOUND.code).send(RESPONSE.Failure);
    }

    await FundingType.update(
      { delete_status: 0, deletedAt: null },
      { where: { funding_type_id } }
    );

    RESPONSE.Success.Message = "Funding type restored successfully.";
    RESPONSE.Success.data = [];
    return res.status(StatusCode.OK.code).send(RESPONSE.Success);
  } catch (error) {
    console.error("Error restoring Funding Type:", error);
    RESPONSE.Failure.Message = error.message || "Failed to restore Funding Type.";
    return res.status(StatusCode.SERVER_ERROR.code).send(RESPONSE.Failure);
  }
};
