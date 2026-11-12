import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import { MdDragIndicator } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import actions from "../../../ReduxStore/actions";
import EventModal from "./Modal/EventModal";

const UpcomingEvents = () => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const { getEvents } = useSelector((state) => state?.getEvents || {});

  const fetchEvents = () => {
    dispatch(
      actions.GETEVENTS({
        apiName: "getEvents",
        method: "get",
      })
    );
  };

  useEffect(() => {
    fetchEvents();
  }, [dispatch]);

  const handleOpenAdd = () => {
    setSelectedEvent(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleOpenDelete = (event) => {
    setEventToDelete(event);
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!eventToDelete) return;
    try {
      const eventId = eventToDelete?.news_event_id || eventToDelete?.id;
      const res = await dispatch(
        actions.DELETENEWSEVENT({
          apiName: `deleteNewsEvent/${eventId}`,
          method: "delete",
        })
      );
      if (res?.payload?.message || res?.meta?.requestStatus === "fulfilled") {
        toast.success("Event deleted successfully!");
        fetchEvents();
      } else {
        toast.error("Failed to delete event.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while deleting.");
    } finally {
      setDeleteConfirmOpen(false);
      setEventToDelete(null);
    }
  };

  // Parse events data & local ordering
  const rawEvents = getEvents?.payload?.data || [];
  const eventsList = Array.isArray(rawEvents) ? rawEvents : [];
  const [orderedEvents, setOrderedEvents] = useState([]);

  useEffect(() => {
    if (Array.isArray(rawEvents)) {
      setOrderedEvents(rawEvents);
    }
  }, [getEvents]);

  const handleMoveEvent = (fromIdx, toIdx) => {
    if (fromIdx === toIdx || fromIdx < 0 || toIdx < 0 || toIdx >= orderedEvents.length) return;
    const updated = [...orderedEvents];
    const [moved] = updated.splice(fromIdx, 1);
    updated.splice(toIdx, 0, moved);
    setOrderedEvents(updated);
    toast.success("Event order updated!");
  };

  return (
    <Box sx={{ width: "100%", p: 1 }}>
      {/* Header bar */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#212529" }}>
            Upcoming Events List
          </Typography>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            startIcon={<FaPlus />}
            onClick={handleOpenAdd}
            sx={{
              backgroundColor: "var(--main-color, #6B3C58)",
              textTransform: "none",
              borderRadius: "23px",
              px: 3,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#502B41",
                boxShadow: "none",
              },
            }}
          >
            Add Event
          </Button>
        </Grid>
      </Grid>

      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: "8px",
          border: "1px solid #E5E7EB",
          overflowX: "auto",
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: "var(--main-color, #6B3C58)" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 1.5, width: 90, textAlign: "center" }}>
                Order
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 1.5, width: 60 }}>
                S.No
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 1.5, width: 90 }}>
                Day
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 1.5, width: 90 }}>
                Month
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 1.5 }}>
                Title
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 1.5 }}>
                Time / Date Range
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 1.5, width: 120 }}>
                Highlight
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: 600, py: 1.5, width: 110, textAlign: "center" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orderedEvents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} sx={{ textAlign: "center", py: 5, color: "#6C757D" }}>
                  {getEvents?.loading ? (
                    "Loading events..."
                  ) : (
                    <Box sx={{ py: 2 }}>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        No events found in database.
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Click "Add Event" above to create your first dynamic upcoming event!
                      </Typography>
                    </Box>
                  )}
                </TableCell>
              </TableRow>
            ) : (
              orderedEvents.map((item, index) => {
                const day =
                  item?.additional_data?.day ||
                  item?.day ||
                  (item?.event_date ? new Date(item.event_date).getDate() : "--");

                const mon =
                  item?.additional_data?.mon ||
                  item?.mon ||
                  (item?.event_date
                    ? new Date(item.event_date).toLocaleString("default", { month: "short" })
                    : "--");

                const time =
                  item?.additional_data?.time ||
                  item?.time ||
                  item?.sub_heading ||
                  item?.content ||
                  "--";

                const isImportant = Boolean(item?.is_important);

                return (
                  <TableRow
                    key={item?.news_event_id || item?.id || index}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData("text/plain", String(index));
                      e.dataTransfer.effectAllowed = "move";
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = "move";
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      const fromIdx = parseInt(e.dataTransfer.getData("text/plain"), 10);
                      if (!isNaN(fromIdx) && fromIdx !== index) {
                        handleMoveEvent(fromIdx, index);
                      }
                    }}
                    sx={{
                      "&:nth-of-type(even)": { backgroundColor: "#F9FAFB" },
                      "&:hover": { backgroundColor: "#F3F4F6" },
                      transition: "background-color 0.15s ease",
                    }}
                  >
                    <TableCell sx={{ py: 1, textAlign: "center" }}>
                      <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}>
                        <Box
                          sx={{
                            cursor: "grab",
                            display: "flex",
                            alignItems: "center",
                            color: "#6B3C58",
                            p: 0.4,
                            borderRadius: "4px",
                            backgroundColor: "#F3EBF0",
                            "&:active": { cursor: "grabbing" },
                          }}
                          title="Drag to reorder event"
                        >
                          <MdDragIndicator size={16} />
                        </Box>
                        <IconButton
                          size="small"
                          disabled={index === 0}
                          onClick={() => handleMoveEvent(index, index - 1)}
                          title="Move event up"
                          sx={{ p: 0.3, color: "#6B3C58", "&:disabled": { color: "#CCC" } }}
                        >
                          <IoIosArrowUp size={14} />
                        </IconButton>
                        <IconButton
                          size="small"
                          disabled={index === orderedEvents.length - 1}
                          onClick={() => handleMoveEvent(index, index + 1)}
                          title="Move event down"
                          sx={{ p: 0.3, color: "#6B3C58", "&:disabled": { color: "#CCC" } }}
                        >
                          <IoIosArrowDown size={14} />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ py: 1.5 }}>{index + 1}</TableCell>
                    <TableCell sx={{ py: 1.5, fontWeight: 600, color: "#6B3C58" }}>
                      {day}
                    </TableCell>
                    <TableCell sx={{ py: 1.5, fontWeight: 600, color: "#6B3C58" }}>
                      {mon}
                    </TableCell>
                    <TableCell sx={{ py: 1.5, fontWeight: 500, color: "#1F2937" }}>
                      {item?.heading || item?.title}
                    </TableCell>
                    <TableCell sx={{ py: 1.5, color: "#4B5563" }}>
                      {time}
                    </TableCell>
                    <TableCell sx={{ py: 1.5 }}>
                      {isImportant ? (
                        <Chip
                          label="Featured"
                          size="small"
                          sx={{
                            backgroundColor: "#FEF3C7",
                            color: "#D97706",
                            fontWeight: 600,
                            fontSize: "12px",
                          }}
                        />
                      ) : (
                        <Chip
                          label="Normal"
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: "12px", color: "#6B7280" }}
                        />
                      )}
                    </TableCell>
                    <TableCell sx={{ py: 1.5, textAlign: "center" }}>
                      <IconButton
                        size="small"
                        onClick={() => handleOpenEdit(item)}
                        sx={{ color: "#6B3C58", mr: 1 }}
                      >
                        <RiPencilLine />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleOpenDelete(item)}
                        sx={{ color: "#EF4444" }}
                      >
                        <RiDeleteBin6Line />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add / Edit Modal */}
      {modalOpen && (
        <EventModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          editData={selectedEvent}
          refreshData={fetchEvents}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this event?
            <br />
            <strong>{eventToDelete?.heading || eventToDelete?.title}</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={() => setDeleteConfirmOpen(false)}
            variant="outlined"
            sx={{ borderRadius: "20px", textTransform: "none" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmDelete}
            variant="contained"
            color="error"
            sx={{ borderRadius: "20px", textTransform: "none" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Box>
  );
};

export default UpcomingEvents;

