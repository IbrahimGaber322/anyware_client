import "./Home.scss";
import { useEffect } from "react";
import { connect } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Navbar from "../../components/navbar/Navbar.js";
import Intro from "../../components/intro/Intro.js";
import Card from "../../components/card/Card.js";
import Announcement from "../../components/announcement/Announcement.js";
import Due from "../../components/due/Due.js";
import { getData } from "../../redux/actionGenerators/homeGenerators.js";
import axiosRequest from "../../utils/api_request/axios_request.js";
import axiosServiceObj from "../../utils/api_request/axios_service_objects.js";

const Home = ({ announcements, dues, getData }) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await axiosRequest(axiosServiceObj.getAllAnnouncements());
        const res2 = await axiosRequest(axiosServiceObj.getAllDues());

        if (res1.status === 200 && res2.status === 200) {
          getData({
            announcements: res1.data.data,
            dues: res2.data.data,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle or log errors as needed
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getData]);

  // ... (Previous code remains the same)

  return (
    <main className="home">
      <Sidebar />
      <div className="content">
        <Navbar />
        <div className="wrapper">
          <Intro />
          <div className="cards">
            <Card
              title="Announcements"
              description="Check out the latest news and updates"
            >
              {announcements.length === 0
                ? "😢 There are currently no announcements."
                : announcements.map((announcement, index) => (
                    <Announcement
                      key={index}
                      username={announcement.instructor.name}
                      title={announcement.announcementTopic}
                      description={announcement.announcementDescription}
                    />
                  ))}
            </Card>
            <Card
              title="Upcoming Deadlines"
              description="Stay on top of your tasks"
            >
              {dues.length === 0
                ? "😎 No pending due tasks right now."
                : dues.map((due, index) => (
                    <Due
                      key={index}
                      type={due.dueType}
                      title={due.dueTitle}
                      list={{
                        course: due.courseName,
                        topic: due.dueTopic,
                        dueDate: due.dueDate,
                      }}
                    />
                  ))}
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    announcements: state.homeReducer.announcements,
    dues: state.homeReducer.dues,
  };
};

const mapDispatchToProps = {
  getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
